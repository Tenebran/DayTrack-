import { todoListApi } from 'api/todolist-api';
import { TaskListApiType, TaskStatuses } from 'api/type';
import { AppDispatchType, AppRootStateType, AppThunk } from '../redux/store';
import { handlerServerAppError, handleServerNetworkError } from '../utils/error-utils';
import { appActions } from './app-reducer';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clearAllData } from '../redux/commonActions';
import { todolistsActions } from './todolists-reducer';

const slice = createSlice({
  name: 'tasks',
  initialState: {} as TasksStateType,
  reducers: {
    removeTask: (state, actions: PayloadAction<{ id: string; todolistId: string }>) => {
      const index = state[actions.payload.todolistId].findIndex((t) => t.id === actions.payload.id);
      if (index !== -1) state[actions.payload.todolistId].splice(index, 1);
    },
    changeTaskStatus: (
      state,
      actions: PayloadAction<{ status: number; id: string; todolistId: string }>
    ) => {
      const task = state[actions.payload.todolistId].find((t) => t.id === actions.payload.id);
      if (task) task.status = actions.payload.status;
    },
    createTask: (state, actions: PayloadAction<{ task: TaskListApiType }>) => {
      state[actions.payload.task.todoListId].unshift(actions.payload.task);
    },
    setTasksLists: (
      state,
      actions: PayloadAction<{ todoID: string; tasks: TaskListApiType[] }>
    ) => {
      state[actions.payload.todoID] = actions.payload.tasks;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.fulfilled, (state, actions) => {
        if (actions.payload?.todolistID)
          state[actions.payload?.todolistID] = actions.payload?.tasks;
      })
      .addCase(addTask.fulfilled, (state, actions) => {
        state[actions.payload.task.todoListId].unshift(actions.payload.task);
      })
      .addCase(updateTask.fulfilled, (state, actions) => {
        const task = state[actions.payload.todolistId]?.find(
          (t) => t.id === actions.payload.taskID
        );
        console.log('Task found:', task);
        if (task) {
          console.log('Updating title to:', actions.payload.title);
          task.title = actions.payload.title;
        }
      })
      .addCase(clearAllData, (state) => {
        Object.keys(state).forEach((key) => delete state[key]);
      })
      .addCase(todolistsActions.addTodolist, (state, actions) => {
        state[actions.payload.todolist.id] = [];
      })
      .addCase(todolistsActions.removeTodoList, (state, actions) => {
        delete state[actions.payload.id];
      })
      .addCase(todolistsActions.setTodolists, (state, actions) => {
        actions.payload.todos.forEach((tl) => {
          state[tl.id];
        });
      });
  },
});

export type TasksStateType = {
  [todoListId: string]: TaskListApiType[];
};

export enum RESULT_CODE {
  SUCCEEDED = 0,
  ERROR,
}

const getTasks = createAsyncThunk<{ tasks: TaskListApiType[]; todolistID: string }, string>(
  'tasks/getTasks',
  async (todolistID, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;

    dispatch(appActions.setAppStatus({ status: 'loading' }));

    try {
      const res = await todoListApi.getTasks(todolistID);
      dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      return { tasks: res.data.items, todolistID };
    } catch (error) {
      dispatch(appActions.setAppStatus({ status: 'failed' }));
      handleServerNetworkError(error, dispatch as AppDispatchType);
      return rejectWithValue(null);
    }
  }
);

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

const addTask = createAsyncThunk<any, { todolistID: string; title: string }>(
  'tasks/addTask',
  async (arg, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
      dispatch(appActions.setAppStatus({ status: 'loading' }));
      const res = await todoListApi.createTasks(arg.todolistID, arg.title);
      if (res.data.resultCode === RESULT_CODE.SUCCEEDED) {
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        return { task: res.data.data.item };
      } else {
        handlerServerAppError<{ item: TaskListApiType }>(dispatch as AppDispatchType, res.data);
      }
    } catch (error) {
      handleServerNetworkError(error, dispatch as AppDispatchType);
      rejectWithValue(null);
    }
  }
);

const updateTask = createAsyncThunk<any, { todolistID: string; taskID: string; title: string }>(
  'tasks/updateTask',
  async (arg, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    console.log('HELLO');
    try {
      dispatch(appActions.setAppStatus({ status: 'loading' }));
      const res = await todoListApi.updateTitleTask(arg.todolistID, arg.taskID, arg.title);
      if (res.data.resultCode === RESULT_CODE.SUCCEEDED) {
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        return {
          state: res.data.items,
          title: arg.title,
          taskID: arg.taskID,
          todolistId: arg.todolistID,
        };
      } else {
        if (res.data.messages.length) {
          dispatch(appActions.setAppError({ error: res.data.messages[0] }));
        } else {
          dispatch(appActions.setAppError({ error: 'Some Error' }));
        }
        dispatch(appActions.setAppStatus({ status: 'failed' }));
      }
    } catch (error) {
      console.log('HELLO ERROR');

      handleServerNetworkError(error, dispatch as AppDispatchType);
      dispatch(appActions.setAppStatus({ status: 'failed' }));
      rejectWithValue(null);
    }
  }
);

export const changeTasksStatusTC =
  (todolistID: string, taskID: string, status: TaskStatuses): AppThunk =>
  (dispatch, getState: () => AppRootStateType) => {
    const rootState = getState();
    const task = rootState.tasks[todolistID].find((task: { id: string }) => taskID === task.id);

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
export const taskThunks = { getTasks, addTask, updateTask };
