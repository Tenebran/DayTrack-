import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '../common/components/Task/tasks-reducer';
import { todolistsReducer } from '../common/pages/Todolist/todolists-reducer';
import { appReducer } from 'app/app-reducer';
import { authReducer } from 'features/auth/auth-reducer';

export const store = configureStore({
  reducer: { tasks: tasksReducer, todolists: todolistsReducer, app: appReducer, auth: authReducer },
});

export type AppRootStateType = ReturnType<typeof store.getState>;

// @ts-expect-error   is necessary.
window.store = store;
