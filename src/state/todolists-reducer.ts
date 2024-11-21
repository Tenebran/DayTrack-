import { todoListApi } from 'api/todolist-api';
import { TodoListsApiType } from 'api/type';
import { appActions, RequestStatusType } from './app-reducer';
import { getTasksTC, RESULT_CODE } from './tasks-reducer';
import { handleServerNetworkError } from '../utils/error-utils';
import { AppThunk } from 'redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todolists',
  initialState: {
    todoLists: [] as TodolistDomainType[],
  },
  reducers: {
    removeTodoList: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.todoLists.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) state.todoLists.splice(index, 1);
    },
    addTodolist: (state, action: PayloadAction<{ todolist: TodoListsApiType }>) => {
      state.todoLists.push({
        ...action.payload.todolist,
        filter: 'all',
        entityStatus: 'idle',
      });
    },
    updateTodoListTitle: (state, action: PayloadAction<{ title: string; id: string }>) => {
      state.todoLists = state.todoLists.map((t) =>
        t.id === action.payload.id ? { ...t, title: action.payload.title } : t
      );
    },
    changeTodoListFilter: (
      state,
      action: PayloadAction<{ filter: KeyTypeTodolist; id: string }>
    ) => {
      state.todoLists = state.todoLists.map((t) =>
        t.id === action.payload.id ? { ...t, filter: action.payload.filter } : t
      );
    },
    setTodolists: (state, actions: PayloadAction<{ todos: TodoListsApiType[] }>) => {
      state.todoLists = actions.payload.todos.map((t) => ({
        ...t,
        filter: 'all',
        entityStatus: 'idle',
      }));
    },
    clearData: (state) => {
      state.todoLists = [];
    },
    setEntityStatus: (
      state,
      action: PayloadAction<{ todoId: string; entityStatus: RequestStatusType }>
    ) => {
      state.todoLists = state.todoLists.map((t) =>
        t.id === action.payload.todoId ? { ...t, entityStatus: action.payload.entityStatus } : t
      );
    },
  },
});

export const SetEntityStatusAC = (todoId: string, entityStatus: RequestStatusType) => {
  return { type: 'SET-ENTITY-STATUS', todoId, entityStatus } as const;
};

export type KeyTypeTodolist = 'all' | 'completed' | 'active';

export type TodolistDomainType = TodoListsApiType & {
  filter: KeyTypeTodolist;
  entityStatus: RequestStatusType;
};

export const SetTodolistsTC = (): AppThunk => (dispatch) => {
  dispatch(appActions.setAppStatus({ status: 'loading' }));
  return todoListApi
    .getTodoLists()
    .then((res) => {
      dispatch(slice.actions.setTodolists({ todos: res.data }));
      dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      return res.data;
    })
    .then((res) =>
      res.forEach((todo) => {
        dispatch(getTasksTC(todo.id));
      })
    )
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
      dispatch(appActions.setAppStatus({ status: 'failed' }));
    });
};

export const DelteTodolistTC =
  (todolistID: string): AppThunk =>
  (dispatch) => {
    dispatch(appActions.setAppStatus({ status: 'loading' }));
    dispatch(SetEntityStatusAC(todolistID, 'loading'));
    return todoListApi
      .deleteTodolist(todolistID)
      .then(() => {
        dispatch(slice.actions.removeTodoList({ id: todolistID }));
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
        dispatch(SetEntityStatusAC(todolistID, 'idle'));
        dispatch(appActions.setAppStatus({ status: 'failed' }));
      });
  };

export const UpdateTodolistTC =
  (todolistID: string, title: string): AppThunk =>
  (dispatch) => {
    dispatch(appActions.setAppStatus({ status: 'loading' }));
    return todoListApi
      .updateTodoList(todolistID, title)
      .then(() => {
        dispatch(slice.actions.updateTodoListTitle({ title, id: todolistID }));
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
        dispatch(SetEntityStatusAC(todolistID, 'idle'));
        dispatch(appActions.setAppStatus({ status: 'failed' }));
      });
  };

export const addTodolistTC =
  (title: string): AppThunk =>
  (dispatch) => {
    dispatch(appActions.setAppStatus({ status: 'loading' }));
    todoListApi
      .createTodolist(title)
      .then((resp) => {
        if (resp.data.resultCode === RESULT_CODE.SUCCEEDED) {
          dispatch(slice.actions.addTodolist({ todolist: resp.data.data.item }));
          dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        } else {
          if (resp.data.messages.length) {
            dispatch(appActions.setAppError({ error: resp.data.messages[0] }));
          } else {
            dispatch(appActions.setAppError({ error: 'Some Error' }));
          }
          dispatch(appActions.setAppStatus({ status: 'failed' }));
        }

        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
        dispatch(appActions.setAppStatus({ status: 'failed' }));
      });
  };

export const todolistsReducer = slice.reducer;
export const todolistsActions = slice.actions;
