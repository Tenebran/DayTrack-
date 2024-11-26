import { v1 } from 'uuid';
import { tasksReducer, TasksStateType } from '../common/components/Task/tasks-reducer';
import {
  TodolistDomainType,
  todolistsReducer,
  todolistsThunk,
} from '../common/pages/Todolist/todolists-reducer';

test('ids should be equals', () => {
  const startTasksState: TasksStateType = {};
  const startTodolistsState: Array<TodolistDomainType> = [];
  const action = todolistsThunk.addTodolist.fulfilled(
    {
      todolist: {
        title: 'new todolist',
        id: v1(),
      },
    },
    'requestId',
    { title: 'new todolist' }
  );

  const endTasksState = tasksReducer(startTasksState, action);
  const endTodolistsState = todolistsReducer(startTodolistsState, action);
  const keys = Object.keys(endTasksState);

  const idFromTasks = keys[0];
  const idFromTodolists = endTodolistsState[0].id;

  expect(idFromTasks).toBe(action.payload.todolist.id);
  expect(idFromTodolists).toBe(action.payload.todolist.id);
});
