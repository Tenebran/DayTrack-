import { v1 } from 'uuid';
import { _SetTodosType, AddTodoListAT, RemoveTodolistAT } from './todolists-reducer';
import { todoListApi } from 'api/todolist-api';
import { Dispatch } from 'redux';
import { TaskListApiType } from 'api/type';

export type TaskType = {
  id: string;
  status: number;
  title: string;
};

export type TasksStateType = {
  [todoListId: string]: TaskType[];
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
  title: string;
  idTodolist: string;
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
        [action.idTodolist]: [
          { id: v1(), status: 0, title: action.title },
          ...(state[action.idTodolist] || []),
        ],
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

export const AddTaskTitleAC = (title: string, idTodolist: string): AddTaskTitleAT => ({
  type: 'ADD_TASK_TITLE',
  title,
  idTodolist,
});

export const setTasksListsAC = (todoID: string, tasks: TaskType[]) =>
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
