import { v1 } from 'uuid';
import { tasksReducer, TasksStateType } from '../state/tasks-reducer';
import { AddTodolistAC, TodolistDomainType, todolistsReducer } from '../state/todolists-reducer';
import { TodoListsApiType } from 'api/type';

test('ids should be equals', () => {
  const startTasksState: TasksStateType = {};
  const startTodolistsState: Array<TodolistDomainType> = [];

  const action = AddTodolistAC({ title: 'new todolist', id: v1() });

  const endTasksState = tasksReducer(startTasksState, action);
  const endTodolistsState = todolistsReducer(startTodolistsState, action);

  const keys = Object.keys(endTasksState);
  const idFromTasks = keys[0];
  const idFromTodolists = endTodolistsState[0].id;

  expect(idFromTasks).toBe(action.todolist.id);
  expect(idFromTodolists).toBe(action.todolist.id);
});
