import { todoListApi } from 'api/todolist-api';
import { TodoListsApiType } from 'api/type';
import { Dispatch } from 'redux';
import { v1 } from 'uuid';
import { setStatusAC } from './app-reducer';

export type FilterTaskType = 'all' | 'active' | 'completed';

export type RemoveTodolistAT = {
  type: 'REMOVE-TODOLIST';
  id: string;
};

export type AddTodoListAT = {
  type: 'ADD-TODOLIST';
  todolist: TodoListsApiType;
};

export type ChangeTodoListTitleAT = {
  type: 'CHANGE-TODOLIST-TITLE';
  title: string;
  id: string;
};

export type ChangeTodoListFilterAT = {
  type: 'CHANGE-TODOLIST-FILTER';
  filter: FilterTaskType;
  id: string;
};

export type ActionTypeTodolists =
  | RemoveTodolistAT
  | AddTodoListAT
  | ChangeTodoListTitleAT
  | ChangeTodoListFilterAT
  | _SetTodosType;

export type _SetTodosType = ReturnType<typeof setTodolistsAC>;

const initialState: TodoListsApiType[] = [];

export const todolistsReducer = (
  todoLists: TodoListsApiType[] = initialState,
  action: ActionTypeTodolists
): TodoListsApiType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST':
      return todoLists.filter((t) => t.id !== action.id);
    case 'ADD-TODOLIST': {
      return [action.todolist, ...todoLists];
    }
    case 'CHANGE-TODOLIST-TITLE':
      return todoLists.map((t) => (t.id === action.id ? { ...t, title: action.title } : t));
    case 'CHANGE-TODOLIST-FILTER':
      return todoLists.map((t) => (t.id === action.id ? { ...t } : t));
    case 'SET-TODOS':
      return action.todos.map((tl) => ({ ...tl }));
    default:
      return todoLists;
  }
};

export const RemoveTodoListAC = (id: string): RemoveTodolistAT => ({ type: 'REMOVE-TODOLIST', id });
export const addTodolistAC = (todolist: TodoListsApiType): AddTodoListAT => ({
  type: 'ADD-TODOLIST',
  todolist,
});
export const ChangeTodoListTitleAC = (title: string, id: string): ChangeTodoListTitleAT => ({
  type: 'CHANGE-TODOLIST-TITLE',
  title,
  id,
});

export const ChangeTodoListFilterAC = (
  filter: FilterTaskType,
  id: string
): ChangeTodoListFilterAT => ({
  type: 'CHANGE-TODOLIST-FILTER',
  filter,
  id,
});

export const setTodolistsAC = (todos: TodoListsApiType[]) =>
  ({
    type: 'SET-TODOS',
    todos,
  }) as const;

export const setTodolistsTC = () => (dispatch: Dispatch) => {
  return todoListApi.getTodoLists().then((res) => {
    dispatch(setTodolistsAC(res.data));
    dispatch(setStatusAC('succeeded'));
  });
};

export const delteTodolistTC = (todolistID: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  return todoListApi.deleteTodolist(todolistID).then(() => {
    dispatch(RemoveTodoListAC(todolistID));
    dispatch(setStatusAC('succeeded'));
  });
};

export const updateTodolistTC = (todolistID: string, title: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  return todoListApi.updateTodoList(todolistID, title).then(() => {
    dispatch(ChangeTodoListTitleAC(title, todolistID));
    dispatch(setStatusAC('succeeded'));
  });
};

export const addTodolistTC = (title: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  todoListApi.createTodolist(title).then((resp) => {
    console.log(resp.data.data.item);
    dispatch(addTodolistAC(resp.data.data.item));
    dispatch(setStatusAC('succeeded'));
  });
};
