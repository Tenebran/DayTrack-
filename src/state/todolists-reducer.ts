import { todoListApi } from 'api/todolist-api';
import { TodoListsApiType } from 'api/type';
import { Dispatch, UnknownAction } from 'redux';
import { RequestStatusType, setErrorAC, setStatusAC } from './app-reducer';
import { getTasksTC, RESULT_CODE, setTasksListsAC } from './tasks-reducer';
import { handleServerNetworkError } from 'utils/error-utils';
import { ThunkDispatch } from 'redux-thunk';
import { AppRootStateType } from './ReduxStoreProviderDecorator';

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
  | ReturnType<typeof SetTodolistsAC>
  | ReturnType<typeof SetEntityStatusAC>
  | ReturnType<typeof setStatusAC>
  | ReturnType<typeof setTasksListsAC>
  | ReturnType<typeof clearTodosDataAC>;

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
      return action.todos.map((list) => ({
        ...list,
        filter: 'all',
        entityStatus: 'idle',
      }));
    }
    case 'CLEAR-DATA': {
      return [];
    }
    case 'SET-ENTITY-STATUS': {
      return todoLists.map((todo) =>
        todo.id === action.todoId ? { ...todo, entityStatus: action.entityStatus } : todo
      );
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

export const SetTodolistsTC =
  () => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionTypeTodolists>) => {
    dispatch(setStatusAC('loading'));
    return todoListApi
      .getTodoLists()
      .then((res) => {
        dispatch(SetTodolistsAC(res.data));
        dispatch(setStatusAC('succeeded'));
        return res.data;
      })
      .then((res) =>
        res.forEach((todo) => {
          dispatch(getTasksTC(todo.id));
        })
      )
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
      });
  };

export const SetEntityStatusAC = (todoId: string, entityStatus: RequestStatusType) => {
  return { type: 'SET-ENTITY-STATUS', todoId, entityStatus } as const;
};

export const clearTodosDataAC = () => {
  return { type: 'CLEAR-DATA' } as const;
};

export const DelteTodolistTC = (todolistID: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  dispatch(SetEntityStatusAC(todolistID, 'loading'));
  return todoListApi
    .deleteTodolist(todolistID)
    .then(() => {
      dispatch(RemoveTodoListAC(todolistID));
      dispatch(setStatusAC('succeeded'));
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
      dispatch(SetEntityStatusAC(todolistID, 'idle'));
    });
};

export const UpdateTodolistTC = (todolistID: string, title: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  return todoListApi
    .updateTodoList(todolistID, title)
    .then(() => {
      dispatch(ChangeTodoListTitleAC(title, todolistID));
      dispatch(setStatusAC('succeeded'));
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
      dispatch(SetEntityStatusAC(todolistID, 'idle'));
    });
};

export const addTodolistTC = (title: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAC('loading'));
  todoListApi
    .createTodolist(title)
    .then((resp) => {
      if (resp.data.resultCode === RESULT_CODE.SUCCEEDED) {
        dispatch(AddTodolistAC(resp.data.data.item));
        dispatch(setStatusAC('succeeded'));
      } else {
        if (resp.data.messages.length) {
          dispatch(setErrorAC(resp.data.messages[0]));
        } else {
          dispatch(setErrorAC('Some Error'));
        }
        dispatch(setStatusAC('failed'));
      }

      dispatch(setStatusAC('succeeded'));
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};
