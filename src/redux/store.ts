import { combineReducers, legacy_createStore } from 'redux';
import { tasksReducer } from '../reduces/tasks-reducer';
import { todolistsReducer } from '../reduces/todolists-reducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
});

// непосредственно создаём store
export const store = legacy_createStore(rootReducer);

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>;

// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
