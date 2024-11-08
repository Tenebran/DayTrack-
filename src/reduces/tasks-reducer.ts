import { v1 } from 'uuid';
import { AddTodoListAT, RemoveTodolistAT } from './todolists-reducer';

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

export type ActionTypeTasksType =
  | RemoveTaskAT
  | ChangeTaskStatusAT
  | ChangeTaskTitleAT
  | AddTaskTitleAT
  | AddTodoListAT
  | RemoveTodolistAT;

const initialState: TasksStateType = {
  todolist1: [
    { id: '1', isDone: false, title: 'HTML&CSS' },
    { id: '2', isDone: false, title: 'JS' },
    { id: '3', isDone: false, title: 'React' },
    { id: '4', isDone: false, title: 'Redux' },
  ],

  todolist2: [
    { id: '1', isDone: false, title: 'Milk' },
    { id: '2', isDone: false, title: 'Bread' },
    { id: '3', isDone: false, title: 'Meat' },
  ],
};

export const tasksReducer = (
  state: TasksStateType = initialState,
  action: ActionTypeTasksType
): TasksStateType => {
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
    case 'REMOVE-TODOLIST':
      const copyTasks = { ...state };
      delete copyTasks[action.id];
      return copyTasks;

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
