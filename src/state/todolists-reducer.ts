import { todoListApi } from 'api/todolist-api';
import { TodoListsApiType } from 'api/type';
import { Dispatch } from 'redux';
import { RequestStatusType, setStatusAC } from './app-reducer';

export const REMOVE_TODOLISTS = 'REMOVE-TODOLIST';
export const ADD_TODOLIST = 'ADD-TODOLIST' as const;
export const CHANGE_TODOLIST_TITLE = 'CHANGE-TODOLIST-TITLE';
export const CHANGE_TODOLIST_FILTER = 'CHANGE-TODOLIST-FILTER';
export const SET_TODOLIST = 'SET-TODOLIST';

export type KeyType = 'all' | 'completed' | 'active';

export type TodolistDomainType = TodoListsApiType & {
  filter: KeyType;
  entityStatus: RequestStatusType;
};

export type ActionTypeTodolists =
  | ReturnType<typeof AddTodolistAC>
  | ReturnType<typeof RemoveTodoListAC>
  | ReturnType<typeof ChangeTodoListTitleAC>
  | ReturnType<typeof ChangeTodoListFilterAC>
  | ReturnType<typeof SetTodolistsAC>;

const initialState: TodolistDomainType[] = [];

export const todolistsReducer = (
  todoLists: TodolistDomainType[] = initialState,
  action: ActionTypeTodolists
): TodolistDomainType[] => {
  switch (action.type) {
    case REMOVE_TODOLISTS:
      return todoLists.filter((t) => t.id !== action.id);

    case ADD_TODOLIST: {
      const newTodolist: TodolistDomainType = {
        ...action.todolist,
        filter: 'all',
        entityStatus: 'idle',
      };
      return [newTodolist, ...todoLists];
    }
    case CHANGE_TODOLIST_TITLE:
      return todoLists.map((t) => (t.id === action.id ? { ...t, title: action.title } : t));
    case CHANGE_TODOLIST_FILTER: {
      return todoLists.map((t) => (t.id === action.id ? { ...t, filter: action.filter } : t));
    }
    case SET_TODOLIST: {
      return action.todos.map((list) => {
        return { ...list, filter: 'all', entityStatus: 'idle' };
      });
    }
    default:
      return todoLists;
  }
};

export const RemoveTodoListAC = (id: string) => ({ type: REMOVE_TODOLISTS, id }) as const;

export const AddTodolistAC = (todolist: TodoListsApiType) => {
  return {
    type: ADD_TODOLIST,
    todolist,
  } as const;
};

export const ChangeTodoListTitleAC = (title: string, id: string) =>
  ({
    type: CHANGE_TODOLIST_TITLE,
    title,
    id,
  }) as const;

export const ChangeTodoListFilterAC = (filter: KeyType, id: string) =>
  ({
    type: CHANGE_TODOLIST_FILTER,
    filter,
    id,
  }) as const;

export const SetTodolistsAC = (todos: TodoListsApiType[]) => {
  return {
    type: SET_TODOLIST,
    todos,
  } as const;
};

export const SetTodolistsTC = () => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  return todoListApi.getTodoLists().then((res) => {
    dispatch(SetTodolistsAC(res.data));
    dispatch(setStatusAC('succeeded'));
  });
};

export const DelteTodolistTC = (todolistID: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  return todoListApi.deleteTodolist(todolistID).then(() => {
    dispatch(RemoveTodoListAC(todolistID));
    dispatch(setStatusAC('succeeded'));
  });
};

export const UpdateTodolistTC = (todolistID: string, title: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  return todoListApi.updateTodoList(todolistID, title).then(() => {
    dispatch(ChangeTodoListTitleAC(title, todolistID));
    dispatch(setStatusAC('succeeded'));
  });
};

export const addTodolistTC = (title: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  todoListApi.createTodolist(title).then((resp) => {
    dispatch(AddTodolistAC(resp.data.data.item));
    dispatch(setStatusAC('succeeded'));
  });
};
