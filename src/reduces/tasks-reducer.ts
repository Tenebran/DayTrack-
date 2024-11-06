import { v1 } from 'uuid';
import { AddTodoListAT } from './todolists-reducer';

export type TaskType = {
  id: string;
  isDone: boolean;
  title: string;
};

export type TasksStateType = {
  [todoListId_1: string]: TaskType[];
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
  isDone: boolean;
  id: string;
  idTodolist: string;
};

export type AddTaskTitleAT = {
  type: 'ADD_TASK_TITLE';
  title: string;
  idTodolist: string;
};

export type ActionType =
  | RemoveTaskAT
  | ChangeTaskStatusAT
  | ChangeTaskTitleAT
  | AddTaskTitleAT
  | AddTodoListAT;

export const tasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
  switch (action.type) {
    case 'REMOVE_TASK':
      return {
        ...state,
        [action.idTodolist]: state[action.idTodolist].filter(t => t.id !== action.id),
      };
    case 'CHANGE_TASK_STATUS':
      return {
        ...state,
        [action.idTodolist]: state[action.idTodolist].map(t =>
          t.id === action.id ? { ...t, isDone: action.isDone } : t
        ),
      };
    case 'CHANGE_TASK_TITLE':
      return {
        ...state,
        [action.idTodolist]: [
          ...state[action.idTodolist].map(t =>
            t.id === action.id ? { ...t, title: action.title } : t
          ),
        ],
      };
    case 'ADD_TASK_TITLE':
      return {
        ...state,
        [action.idTodolist]: [
          { id: v1(), isDone: false, title: action.title },
          ...state[action.idTodolist],
        ],
      };
    case 'ADD-TODOLIST':
      return {
        ...state,
        [action.todolistID]: [],
      };
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
  isDone: boolean,
  id: string,
  idTodolist: string
): ChangeTaskStatusAT => ({ type: 'CHANGE_TASK_STATUS', isDone, id, idTodolist });

export const ChangeTaskTitleAC = (
  title: string,
  id: string,
  idTodolist: string
): ChangeTaskTitleAT => ({ type: 'CHANGE_TASK_TITLE', title, id, idTodolist });

export const AddTaskTitleAC = (title: string, idTodolist: string): AddTaskTitleAT => ({
  type: 'ADD_TASK_TITLE',
  title,
  idTodolist,
});
