import { v1 } from 'uuid';
import { tasksActions, tasksReducer, TasksStateType } from '../state/tasks-reducer';
import { TodolistDomainType, todolistsActions, todolistsReducer } from '../state/todolists-reducer';

test.only('ids should be equals', () => {
  const startTasksState: TasksStateType = {};
  const startTodolistsState: Array<TodolistDomainType> = [];
  const newTodolistId = v1();
  const action = todolistsActions.addTodolist({ todolist: { title: 'new todolist', id: v1() } });

  const endTasksState = tasksReducer({ task: startTasksState }, action);
  const endTodolistsState = todolistsReducer({ todoLists: startTodolistsState }, action);

  const keys = Object.keys(endTasksState.task);
  const idFromTasks = keys[0];
  const idFromTodolists = endTodolistsState.todoLists[0].id;

  console.log('endTasksState', endTasksState);
  console.log('endTodolistsState', endTodolistsState);

  console.log('endTodolistsState.todoLists[0].id', endTodolistsState.todoLists[0].id);
  expect(idFromTasks).toBe(action.payload.todolist.id);
  expect(idFromTodolists).toBe(action.payload.todolist);
});
