import React from 'react';
import { Provider } from 'react-redux';
import { v1 } from 'uuid';
import { tasksReducer } from './tasks-reducer';
import { todolistsReducer } from './todolists-reducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

const todolistId1 = v1();
const todolistId2 = v1();

const initialGlobalState = {
  todolists: [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ],
  tasks: {
    [todolistId1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: false },
    ],
    [todolistId2]: [
      { id: v1(), title: 'Milk', isDone: false },
      { id: v1(), title: 'React Book', isDone: true },
    ],
  },
} as AppRootStateType;

export const storyBookStore = configureStore({
  reducer: rootReducer,
  preloadedState: initialGlobalState as any,
});

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => (
  <Provider store={storyBookStore}>{storyFn()}</Provider>
);
