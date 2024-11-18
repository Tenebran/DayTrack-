import { Action, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '../state/tasks-reducer';
import { todolistsReducer } from '../state/todolists-reducer';
import { ThunkDispatch } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { appReducer } from 'state/app-reducer';
import { authReducer } from 'features/auth-reducer';

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

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, Action>;
export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

// @ts-expect-error   is necessary.
window.store = store;
