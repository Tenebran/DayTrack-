import { todoListApi } from 'api/todolist-api';
import { TaskListApiType, TaskListModelType } from 'api/type';
import { AppRootStateType } from '../../../redux/store';
import { handlerServerAppError } from '../../../utils/handlerServerAppError';
import { handleServerNetworkError } from '../../../utils/handleServerNetworkError';
import { appActions } from '../../../app/app-reducer';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clearAllData } from '../../../redux/commonActions';
import { todolistsActions, todolistsThunk } from '../../pages/Todolist/todolists-reducer';

const slice = createSlice({
  name: 'tasks',
  initialState: {} as TasksStateType,
  reducers: {
    setTasksLists: (
      state,
      actions: PayloadAction<{ todoID: string; tasks: TaskListApiType[] }>
    ) => {
      state[actions.payload.todoID] = actions.payload.tasks;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.fulfilled, (state, actions) => {
        if (actions.payload?.todolistID)
          state[actions.payload?.todolistID] = actions.payload?.tasks;
      })
      .addCase(todolistsThunk.deleteTodolist.fulfilled, (state, actions) => {
        delete state[actions.payload.id];
      })
      .addCase(removeTask.fulfilled, (state, actions) => {
        const index = state[actions.payload.todolistId].findIndex(
          (t) => t.id === actions.payload.id
        );
        if (index !== -1) state[actions.payload.todolistId].splice(index, 1);
      })
      .addCase(addTask.fulfilled, (state, actions) => {
        state[actions.payload.task.todoListId].unshift(actions.payload.task);
      })
      .addCase(updateTask.fulfilled, (state, actions) => {
        const task = state[actions.payload.model?.todoListId]?.find(
          (t) => t.id === actions.payload.model.id
        );
        if (task) {
          Object.assign(task, actions.payload.model);
        }
      })
      .addCase(clearAllData, (state) => {
        Object.keys(state).forEach((key) => delete state[key]);
      })
      .addCase(todolistsThunk.addTodolist.fulfilled, (state, actions) => {
        state[actions.payload.todolist.id] = [];
      })
      .addCase(todolistsActions.setTodolists, (state, actions) => {
        actions.payload.todos.forEach((tl) => {
          state[tl.id];
        });
      });
  },
});

export type TasksStateType = {
  [todoListId: string]: TaskListApiType[];
};

export enum RESULT_CODE {
  SUCCEEDED = 0,
  ERROR,
}

const getTasks = createAsyncThunk<{ tasks: TaskListApiType[]; todolistID: string }, string>(
  'tasks/getTasks',
  async (todolistID, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;

    dispatch(appActions.setAppStatus({ status: 'loading' }));

    try {
      const res = await todoListApi.getTasks(todolistID);
      dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      return { tasks: res.data.items, todolistID };
    } catch (error) {
      dispatch(appActions.setAppStatus({ status: 'failed' }));
      handleServerNetworkError(error, dispatch);
      return rejectWithValue(null);
    }
  }
);

const removeTask = createAsyncThunk<
  { id: string; todolistId: string },
  { todolistID: string; taskID: string }
>('tasks/remove', async (arg, thunkApi) => {
  const { dispatch, rejectWithValue } = thunkApi;
  dispatch(appActions.setAppStatus({ status: 'loading' }));

  try {
    await todoListApi.deleteTask(arg.todolistID, arg.taskID);
    dispatch(appActions.setAppStatus({ status: 'succeeded' }));
    return { id: arg.taskID, todolistId: arg.todolistID };
  } catch (error) {
    handleServerNetworkError(error, dispatch);
    dispatch(appActions.setAppStatus({ status: 'failed' }));
    return rejectWithValue(null);
  }
});

const addTask = createAsyncThunk<{ task: TaskListApiType }, { todolistID: string; title: string }>(
  'tasks/addTask',
  async (arg, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
      dispatch(appActions.setAppStatus({ status: 'loading' }));
      const res = await todoListApi.createTasks(arg.todolistID, arg.title);
      if (res.data.resultCode === RESULT_CODE.SUCCEEDED) {
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        return { task: res.data.data.item };
      } else {
        handlerServerAppError<{ item: TaskListApiType }>(dispatch, res.data);
        return rejectWithValue(null);
      }
    } catch (error) {
      handleServerNetworkError(error, dispatch);
      return rejectWithValue(null);
    }
  }
);

const updateTask = createAsyncThunk<
  {
    model: TaskListApiType;
  },
  TaskListModelType
>('tasks/updateTask', async (arg, thunkApi) => {
  const { dispatch, rejectWithValue, getState } = thunkApi;
  const rootState = getState() as AppRootStateType;
  const task = rootState.tasks[arg.todoListId].find((task: { id: string }) => arg.id === task.id);
  dispatch(appActions.setAppStatus({ status: 'loading' }));

  try {
    if (task) {
      const model: TaskListApiType = {
        title: arg.title ?? task.title,
        status: arg.status ?? task.status,
        description: arg.description,
        priority: task.priority,
        deadline: task.deadline,
        id: task.id,
        todoListId: task.todoListId,
      };

      const res = await todoListApi.updateStatusTask(model);
      res.data;
      dispatch(appActions.setAppStatus({ status: 'succeeded' }));
      return {
        state: res.data.items,
        model: model,
      };
    } else {
      return rejectWithValue(null);
    }
  } catch (error) {
    handleServerNetworkError(error, dispatch);
    dispatch(appActions.setAppStatus({ status: 'failed' }));
    return rejectWithValue(null);
  }
});

export const tasksReducer = slice.reducer;
export const tasksActions = slice.actions;
export const taskThunks = { getTasks, addTask, updateTask, removeTask };
