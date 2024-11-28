import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '../features/tasks/tasks-reducer';
import { todolistsReducer } from '../features/todolists/todolists-reducer';
import { appReducer } from './app-reducer';
import { authReducer } from '../features/auth/auth-reducer';

export const store = configureStore({
  reducer: { tasks: tasksReducer, todolists: todolistsReducer, app: appReducer, auth: authReducer },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

// @ts-expect-error   is necessary.
window.store = store;
