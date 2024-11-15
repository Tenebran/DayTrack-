import { v1 } from 'uuid';
import { _SetTodosType, AddTodoListAT, RemoveTodolistAT } from './todolists-reducer';
import { todoListApi } from 'api/todolist-api';
import { Dispatch } from 'redux';
import { TaskListApiType } from 'api/type';

export type TasksStateType = {
  [todoListId: string]: TaskListApiType[];
};

export type RemoveTaskAT = {
  type: 'REMOVE_TASK';
  id: string;
  idTodolist: string;
};

export type ChangeTaskTitleAT = {
  type: 'CHANGE_TASK_TITLE';
  title: string;
  id: string;
  idTodolist: string;
};

export type ChangeTaskStatusAT = {
  type: 'CHANGE_TASK_STATUS';
  status: number;
  id: string;
  idTodolist: string;
};

export type AddTaskTitleAT = {
  type: 'ADD_TASK_TITLE';
  task: TaskListApiType;
};

export type _SetTasksType = ReturnType<typeof setTasksListsAC>;

export type ActionTypeTasksType =
  | RemoveTaskAT
  | ChangeTaskStatusAT
  | ChangeTaskTitleAT
  | AddTaskTitleAT
  | AddTodoListAT
  | RemoveTodolistAT
  | _SetTodosType
  | _SetTasksType;

const initialState: TasksStateType = {};

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
        [action.todolistID]: [],
      };
    case 'REMOVE-TODOLIST': {
      const copyTasks = { ...state };
      delete copyTasks[action.id];
      return copyTasks;
    }
    case 'SET-TODOS': {
      const copyState = { ...state };
      action.todos.forEach((tl) => (copyState[tl.id] = []));
      return copyState;
    }

    case 'SET-TASKS': {
      return { ...state, [action.todoID]: action.tasks };
    }
    default:
      return state;
  }
};

export const RemoveTasksAC = (id: string, idTodolist: string): RemoveTaskAT => ({
  type: 'REMOVE_TASK',
  id,
  idTodolist,
});

export const ChangeTaskStatusAC = (
  status: number,
  id: string,
  idTodolist: string
): ChangeTaskStatusAT => ({ type: 'CHANGE_TASK_STATUS', status, id, idTodolist });

export const ChangeTaskTitleAC = (
  title: string,
  id: string,
  idTodolist: string
): ChangeTaskTitleAT => ({ type: 'CHANGE_TASK_TITLE', title, id, idTodolist });

export const AddTaskTitleAC = (task: TaskListApiType): AddTaskTitleAT => ({
  type: 'ADD_TASK_TITLE',
  task,
});

export const setTasksListsAC = (todoID: string, tasks: TaskListApiType[]) =>
  ({
    type: 'SET-TASKS',
    tasks,
    todoID,
  }) as const;

export const getTasksTC = (todolistID: string) => (dispatch: Dispatch) => {
  todoListApi.getTasks(todolistID).then((resp) => {
    dispatch(setTasksListsAC(todolistID, resp.data.items));
  });
};

export const removeTasksTC = (todolistID: string, taskID: string) => (dispatch: Dispatch) => {
  todoListApi.deleteTask(todolistID, taskID).then(() => {
    dispatch(RemoveTasksAC(taskID, todolistID));
  });
};

export const addTasksTC = (title: string, todolistID: string) => (dispatch: Dispatch) => {
  todoListApi.createTasks(todolistID, title).then((res) => {
    dispatch(AddTaskTitleAC(res.data.data.item));
  });
};

export const changeTasksTitleTC =
  (todolistID: string, taskID: string, title: string) => (dispatch: Dispatch) => {
    todoListApi.updateTitleTask(todolistID, taskID, title).then(() => {
      dispatch(ChangeTaskTitleAC(title, taskID, todolistID));
    });
  };

export const changeTasksStatusTC =
  (todolistID: string, taskID: string, status: number, title: string) => (dispatch: Dispatch) => {
    todoListApi.updateStatusTask(todolistID, taskID, status, title).then(() => {
      dispatch(ChangeTaskStatusAC(status, taskID, todolistID));
    });
  };
