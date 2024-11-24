import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '../common/components/Task/tasks-reducer';
import { todolistsReducer } from '../common/pages/Todolist/todolists-reducer';
import { appReducer } from 'app/app-reducer';
import { authReducer } from 'features/auth/auth-reducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
  app: appReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-expect-error   is necessary.
window.store = store;
