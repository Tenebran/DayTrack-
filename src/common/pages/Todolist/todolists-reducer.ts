import { todoListApi } from 'api/todolist-api';
import { TodoListsApiType } from 'api/type';
import { appActions, RequestStatusType } from '../../../app/app-reducer';
import { RESULT_CODE, tasksActions, taskThunks } from '../../components/Task/tasks-reducer';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clearAllData } from '../../../redux/commonActions';
import { handleServerNetworkError } from '../../utils/handleServerNetworkError';
import { AppThunk } from 'common/hooks/useAppDispatch';
import { AppDispatchType } from 'app/store';

const slice = createSlice({
  name: 'todolistss',
  initialState: [] as TodolistDomainType[],

  reducers: {
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
    builder
      .addCase(clearAllData, () => {
        return [];
      })
      .addCase(deleteTodolist.fulfilled, (state, actions) => {
        const index = state.findIndex((todo) => todo.id === actions.payload.id);
        if (index !== -1) state.splice(index, 1);
      })
      .addCase(updateTodolist.fulfilled, (state, actions) => {
        const todolist = state.find((todo) => todo.id === actions.payload.id);
        if (todolist) todolist.title = actions.payload.title;
      })
      .addCase(addTodolist.fulfilled, (state, actions) => {
        state.unshift({
          ...actions.payload.todolist,
          filter: 'all',
          entityStatus: 'idle',
        });
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
      dispatch(clearAllData());
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
      handleServerNetworkError(error, dispatch as AppDispatchType);
      dispatch(appActions.setAppStatus({ status: 'failed' }));
    });
};

export const deleteTodolist = createAsyncThunk<{ id: string }, { todolistId: string }>(
  'todolists/delete',
  async (arg, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;

    try {
      dispatch(appActions.setAppStatus({ status: 'loading' }));
      dispatch(
        todolistsActions.setEntityStatus({ todoId: arg.todolistId, entityStatus: 'loading' })
      );
      await todoListApi.deleteTodolist(arg.todolistId);
      dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      return { id: arg.todolistId };
    } catch (error) {
      handleServerNetworkError(error, dispatch as AppDispatchType);
      dispatch(todolistsActions.setEntityStatus({ todoId: arg.todolistId, entityStatus: 'idle' }));
      dispatch(appActions.setAppStatus({ status: 'failed' }));
      return rejectWithValue(null);
    }
  }
);

export const updateTodolist = createAsyncThunk<
  { title: string; id: string },
  { todolistId: string; title: string }
>('todolist/update', async (arg, thunkApi) => {
  const { dispatch, rejectWithValue } = thunkApi;

  try {
    dispatch(appActions.setAppStatus({ status: 'loading' }));
    await todoListApi.updateTodoList(arg.todolistId, arg.title);
    dispatch(appActions.setAppStatus({ status: 'succeeded' }));
    return { title: arg.title, id: arg.todolistId };
  } catch (error) {
    handleServerNetworkError(error, dispatch as AppDispatchType);
    dispatch(todolistsActions.setEntityStatus({ todoId: arg.todolistId, entityStatus: 'idle' }));
    dispatch(appActions.setAppStatus({ status: 'failed' }));
    return rejectWithValue(null);
  }
});

export const addTodolist = createAsyncThunk<{ todolist: TodoListsApiType }, { title: string }>(
  'todolist/create',
  async (arg, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
      dispatch(appActions.setAppStatus({ status: 'loading' }));
      const resp = await todoListApi.createTodolist(arg.title);
      if (resp.data.resultCode === RESULT_CODE.SUCCEEDED) {
        dispatch(tasksActions.setTasksLists({ todoID: resp.data.data.item.id, tasks: [] }));
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        return { todolist: resp.data.data.item };
      } else {
        if (resp.data.messages.length) {
          dispatch(appActions.setAppError({ error: resp.data.messages[0] }));
          return rejectWithValue(null);
        } else {
          dispatch(appActions.setAppError({ error: 'Some Error' }));
          return rejectWithValue(null);
        }
      }
    } catch (error) {
      handleServerNetworkError(error, dispatch as AppDispatchType);
      dispatch(appActions.setAppStatus({ status: 'failed' }));
      return rejectWithValue(null);
    }
  }
);

export const todolistsReducer = slice.reducer;
export const todolistsActions = slice.actions;

export const todolistsThunk = { deleteTodolist, updateTodolist, addTodolist };
