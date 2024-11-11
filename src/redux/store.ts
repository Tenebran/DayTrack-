import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '../state/tasks-reducer';
import { todolistsReducer } from '../state/todolists-reducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
