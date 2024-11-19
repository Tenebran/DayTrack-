import {
  SetTodolistsAC,
  AddTodolistAC,
  RemoveTodoListAC,
  clearTodosDataAC,
} from './todolists-reducer';
import { todoListApi } from 'api/todolist-api';
import { Dispatch } from 'redux';
import { TaskListApiType, TaskStatuses, TodoListsApiType } from 'api/type';
import { AppRootStateType } from '../redux/store';
import { setErrorAC, setStatusAC } from './app-reducer';
import { handlerServerAppError, handleServerNetworkError } from 'utils/error-utils';

export type TasksStateType = {
  [todoListId: string]: TaskListApiType[];
};

export type _SetTasksType = ReturnType<typeof setTasksListsAC>;

export type ActionTypeTasksType =
  | ReturnType<typeof RemoveTasksAC>
  | ReturnType<typeof ChangeTaskStatusAC>
  | ReturnType<typeof ChangeTaskTitleAC>
  | ReturnType<typeof AddTaskTitleAC>
  | ReturnType<typeof AddTodolistAC>
  | ReturnType<typeof RemoveTodoListAC>
  | ReturnType<typeof SetTodolistsAC>
  | ReturnType<typeof clearTodosDataAC>
  | _SetTasksType;

const initialState: TasksStateType = {};

export enum RESULT_CODE {
  SUCCEEDED = 0,
  ERROR,
}

export const tasksReducer = (
  state: TasksStateType = initialState,
  action: ActionTypeTasksType
): TasksStateType => {
  switch (action.type) {
    case 'REMOVE_TASK':
      return {
        ...state,
        [action.idTodolist]: state[action.idTodolist].filter((t) => t.id !== action.id),
      };
    case 'CHANGE_TASK_STATUS':
      return {
        ...state,
        [action.idTodolist]: state[action.idTodolist].map((t) =>
          t.id === action.id ? { ...t, status: action.status } : t
        ),
      };
    case 'CHANGE_TASK_TITLE':
      return {
        ...state,
        [action.idTodolist]: [
          ...state[action.idTodolist].map((t) =>
            t.id === action.id ? { ...t, title: action.title } : t
          ),
        ],
      };
    case 'ADD_TASK_TITLE':
      return {
        ...state,
        [action.task.todoListId]: [action.task, ...state[action.task.todoListId]],
      };
    case 'ADD-TODOLIST':
      return {
        ...state,
        [action.todolist.id]: [],
      };
    case 'REMOVE-TODOLIST': {
      const copyTasks = { ...state };
      delete copyTasks[action.id];
      return copyTasks;
    }
    case 'SET-TODOLIST': {
      const copyState = { ...state };
      action.todos.forEach((tl: TodoListsApiType) => (copyState[tl.id] = []));
      return copyState;
    }
    case 'CLEAR-DATA': {
      return {};
    }
    case 'SET-TASKS': {
      return { ...state, [action.todoID]: action.tasks };
    }
    default:
      return state;
  }
};

export const RemoveTasksAC = (id: string, idTodolist: string) =>
  ({
    type: 'REMOVE_TASK',
    id,
    idTodolist,
  }) as const;

export const ChangeTaskStatusAC = (status: number, id: string, idTodolist: string) =>
  ({ type: 'CHANGE_TASK_STATUS', status, id, idTodolist }) as const;

export const ChangeTaskTitleAC = (title: string, id: string, idTodolist: string) =>
  ({ type: 'CHANGE_TASK_TITLE', title, id, idTodolist }) as const;

export const AddTaskTitleAC = (task: TaskListApiType) =>
  ({
    type: 'ADD_TASK_TITLE',
    task,
  }) as const;

export const setTasksListsAC = (todoID: string, tasks: TaskListApiType[]) =>
  ({
    type: 'SET-TASKS',
    tasks,
    todoID,
  }) as const;

export const getTasksTC = (todolistID: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  todoListApi.getTasks(todolistID).then((resp) => {
    dispatch(setTasksListsAC(todolistID, resp.data.items));
    dispatch(setStatusAC('succeeded'));
  });
};

export const removeTasksTC = (todolistID: string, taskID: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  todoListApi
    .deleteTask(todolistID, taskID)
    .then(() => {
      dispatch(RemoveTasksAC(taskID, todolistID));
      dispatch(setStatusAC('succeeded'));
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};

export const addTasksTC = (title: string, todolistID: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  todoListApi
    .createTasks(todolistID, title)
    .then((res) => {
      if (res.data.resultCode === RESULT_CODE.SUCCEEDED) {
        dispatch(AddTaskTitleAC(res.data.data.item));
        dispatch(setStatusAC('succeeded'));
      } else {
        handlerServerAppError<{ item: TaskListApiType }>(dispatch, res.data);
      }
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};

export const changeTasksTitleTC =
  (todolistID: string, taskID: string, title: string) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'));
    todoListApi
      .updateTitleTask(todolistID, taskID, title)
      .then((res) => {
        if (res.data.resultCode === RESULT_CODE.SUCCEEDED) {
          dispatch(ChangeTaskTitleAC(title, taskID, todolistID));
          dispatch(setStatusAC('succeeded'));
        } else {
          if (res.data.messages.length) {
            dispatch(setErrorAC(res.data.messages[0]));
          } else {
            dispatch(setErrorAC('Some Error'));
          }
          dispatch(setStatusAC('failed'));
        }
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
      });
  };

export const changeTasksStatusTC =
  (todolistID: string, taskID: string, status: TaskStatuses) =>
  (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const rootState = getState();
    const task = rootState.tasks[todolistID].find((task) => taskID === task.id);

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
      dispatch(setStatusAC('loading'));
      todoListApi
        .updateStatusTask(model)
        .then(() => {
          dispatch(ChangeTaskStatusAC(status, taskID, todolistID));
          dispatch(setStatusAC('succeeded'));
        })
        .catch((error) => {
          handleServerNetworkError(error, dispatch);
        });
    }
  };
