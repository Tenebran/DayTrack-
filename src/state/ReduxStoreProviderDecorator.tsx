import React from "react";
import { Provider } from "react-redux";
import { v1 } from "uuid";
import { tasksReducer } from "../features/tasks/tasks-reducer";
import { todolistsReducer } from "../features/todolists/todolists-reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

const todolistId1 = v1();
const todolistId2 = v1();

const initialGlobalState = {
  todolists: [
    { id: todolistId1, title: "What to learn" },
    { id: todolistId2, title: "What to buy" },
  ],
  tasks: {
    [todolistId1]: [
      { id: v1(), title: "HTML&CSS", status: 2 },
      { id: v1(), title: "JS", status: 0 },
    ],
    [todolistId2]: [
      { id: v1(), title: "Milk", status: 0 },
      { id: v1(), title: "React Book", status: 2 },
    ],
  },
} as unknown as AppRootStateType;

export const storyBookStore = configureStore({
  reducer: rootReducer,
  preloadedState: initialGlobalState as any,
});

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => (
  <Provider store={storyBookStore}>{storyFn()}</Provider>
);
