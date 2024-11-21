import { todoListApi } from 'api/todolist-api';
import { TaskListApiType, TaskStatuses, TodoListsApiType } from 'api/type';
import { AppRootStateType, AppThunk } from '../redux/store';
import { handlerServerAppError, handleServerNetworkError } from '../utils/error-utils';
import { appActions } from './app-reducer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { todolistsActions } from './todolists-reducer';

const slice = createSlice({
  name: 'tasks',
  initialState: { task: {} as TasksStateType },
  reducers: {
    removeTask: (state, actions: PayloadAction<{ id: string; todolistId: string }>) => {
      state.task = {
        ...state.task,
        [actions.payload.todolistId]: state.task[actions.payload.todolistId].filter(
          (t) => t.id !== actions.payload.id
        ),
      };
    },
    changeTaskStatus: (
      state,
      actions: PayloadAction<{ status: number; id: string; todolistId: string }>
    ) => {
      state.task = {
        ...state.task,
        [actions.payload.todolistId]: state.task[actions.payload.todolistId].map((t) =>
          t.id === actions.payload.id ? { ...t, status: actions.payload.status } : t
        ),
      };
    },
    changeTaskTitle: (
      state,
      actions: PayloadAction<{ title: string; id: string; todolistId: string }>
    ) => {
      state.task = {
        ...state.task,
        [actions.payload.todolistId]: state.task[actions.payload.todolistId].map((t) =>
          t.id === actions.payload.id ? { ...t, title: actions.payload.title } : t
        ),
      };
    },
    createTask: (state, actions: PayloadAction<{ task: TaskListApiType }>) => {
      state.task = {
        ...state.task,
        [actions.payload.task.todoListId]: [
          actions.payload.task,
          ...state.task[actions.payload.task.todoListId],
        ],
      };
    },
    setTasksLists: (
      state,
      actions: PayloadAction<{ todoID: string; tasks: TaskListApiType[] }>
    ) => {
      state.task = { ...state.task, [actions.payload.todoID]: actions.payload.tasks };
    },
    clearDataTask: (state) => {
      state.task = {};
    },
    setTodolists: (state, actions: PayloadAction<{ todolists: TodoListsApiType[] }>) => {
      actions.payload.todolists.forEach((tl: TodoListsApiType) => (state.task[tl.id] = []));
    },
    removeTodolist: (state, actions: PayloadAction<{ taskId: string }>) => {
      delete state.task[actions.payload.taskId];
    },
    // addTodolist: (state, actions: PayloadAction<{todolistId: string}>) {
    //   state.task =  {...state,
    //   [actions.payload.todolistId]: [],}
    // }
  },
});

export type TasksStateType = {
  [todoListId: string]: TaskListApiType[];
};

export enum RESULT_CODE {
  SUCCEEDED = 0,
  ERROR,
}

export const getTasksTC =
  (todolistID: string): AppThunk =>
  (dispatch) => {
    dispatch(appActions.setAppStatus({ status: 'loading' }));
    todoListApi
      .getTasks(todolistID)
      .then((resp) => {
        dispatch(appActions.setAppStatus({ status: 'loading' }));
        dispatch(slice.actions.setTasksLists({ todoID: todolistID, tasks: resp.data.items }));
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
      });
  };

export const removeTasksTC =
  (todolistID: string, taskID: string): AppThunk =>
  (dispatch) => {
    dispatch(appActions.setAppStatus({ status: 'loading' }));

    todoListApi
      .deleteTask(todolistID, taskID)
      .then(() => {
        dispatch(slice.actions.removeTask({ id: taskID, todolistId: todolistID }));
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
        dispatch(appActions.setAppStatus({ status: 'failed' }));
      });
  };

export const addTasksTC =
  (title: string, todolistID: string): AppThunk =>
  (dispatch) => {
    dispatch(appActions.setAppStatus({ status: 'loading' }));
    todoListApi
      .createTasks(todolistID, title)
      .then((res) => {
        if (res.data.resultCode === RESULT_CODE.SUCCEEDED) {
          dispatch(slice.actions.createTask({ task: res.data.data.item }));
          dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        } else {
          handlerServerAppError<{ item: TaskListApiType }>(dispatch, res.data);
        }
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
        dispatch(appActions.setAppStatus({ status: 'failed' }));
      });
  };

export const changeTasksTitleTC =
  (todolistID: string, taskID: string, title: string): AppThunk =>
  (dispatch) => {
    dispatch(appActions.setAppStatus({ status: 'loading' }));
    todoListApi
      .updateTitleTask(todolistID, taskID, title)
      .then((res) => {
        if (res.data.resultCode === RESULT_CODE.SUCCEEDED) {
          dispatch(slice.actions.changeTaskTitle({ title, id: taskID, todolistId: todolistID }));
          dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        } else {
          if (res.data.messages.length) {
            dispatch(appActions.setAppError({ error: res.data.messages[0] }));
          } else {
            dispatch(appActions.setAppError({ error: 'Some Error' }));
          }
          dispatch(appActions.setAppStatus({ status: 'failed' }));
        }
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
        dispatch(appActions.setAppStatus({ status: 'failed' }));
      });
  };

export const changeTasksStatusTC =
  (todolistID: string, taskID: string, status: TaskStatuses): AppThunk =>
  (dispatch, getState: () => AppRootStateType) => {
    const rootState = getState();
    const task = rootState.tasks.task[todolistID].find(
      (task: { id: string }) => taskID === task.id
    );

    if (task) {
      const model: TaskListApiType = {
        title: task.title,
        status,
        description: task.description,
        priority: task.priority,
        deadline: task.deadline,
        id: task.id,
        todoListId: task.todoListId,
      };
      dispatch(appActions.setAppStatus({ status: 'loading' }));
      todoListApi
        .updateStatusTask(model)
        .then(() => {
          dispatch(slice.actions.changeTaskStatus({ status, id: taskID, todolistId: todolistID }));
          dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        })
        .catch((error) => {
          handleServerNetworkError(error, dispatch);
          dispatch(appActions.setAppStatus({ status: 'failed' }));
        });
    }
  };

export const tasksReducer = slice.reducer;
export const tasksActions = slice.actions;
