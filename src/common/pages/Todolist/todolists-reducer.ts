import { todoListApi } from 'api/todolist-api';
import { TodoListsApiType } from 'api/type';
import { appActions, RequestStatusType } from '../../../app/app-reducer';
import { RESULT_CODE, tasksActions, taskThunks } from '../../components/Task/tasks-reducer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clearAllData } from '../../../redux/commonActions';
import { handleServerNetworkError } from '../../../utils/handleServerNetworkError';
import { AppThunk } from 'common/hooks/useAppDispatch';

const slice = createSlice({
  name: 'todolistss',
  initialState: [] as TodolistDomainType[],

  reducers: {
    removeTodoList: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) state.splice(index, 1);
    },
    addTodolist: (state, action: PayloadAction<{ todolist: TodoListsApiType }>) => {
      state.unshift({
        ...action.payload.todolist,
        filter: 'all',
        entityStatus: 'idle',
      });
    },
    updateTodoListTitle: (state, action: PayloadAction<{ title: string; id: string }>) => {
      const todolist = state.find((todo) => todo.id === action.payload.id);
      if (todolist) todolist.title = action.payload.title;
    },
    changeTodoListFilter: (
      state,
      action: PayloadAction<{ filter: KeyTypeTodolist; id: string }>
    ) => {
      const todolist = state.find((todo) => todo.id === action.payload.id);
      if (todolist) todolist.filter = action.payload.filter;
    },
    setTodolists: (state, actions: PayloadAction<{ todos: TodoListsApiType[] }>) => {
      actions.payload.todos.forEach((t) =>
        state.push({
          ...t,
          filter: 'all',
          entityStatus: 'idle',
        })
      );
    },
    setEntityStatus: (
      state,
      action: PayloadAction<{ todoId: string; entityStatus: RequestStatusType }>
    ) => {
      const newState = state.find((todo) => todo.id === action.payload.todoId);
      if (newState) newState.entityStatus = action.payload.entityStatus;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearAllData, () => {
      return [];
    });
  },
});

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
        dispatch(taskThunks.getTasks(todo.id));
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
    dispatch(todolistsActions.setEntityStatus({ todoId: todolistID, entityStatus: 'loading' }));
    return todoListApi
      .deleteTodolist(todolistID)
      .then(() => {
        dispatch(slice.actions.removeTodoList({ id: todolistID }));
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      })
      .catch((error) => {
        handleServerNetworkError(error, dispatch);
        dispatch(todolistsActions.setEntityStatus({ todoId: todolistID, entityStatus: 'idle' }));
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
        dispatch(todolistsActions.setEntityStatus({ todoId: todolistID, entityStatus: 'idle' }));
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
          dispatch(tasksActions.setTasksLists({ todoID: resp.data.data.item.id, tasks: [] }));
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
