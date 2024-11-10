import { v1 } from 'uuid';
import {
  AddTaskTitleAC,
  ChangeTaskStatusAC,
  ChangeTaskTitleAC,
  RemoveTasksAC,
  tasksReducer,
  TasksStateType,
} from './tasks-reducer';
import { addTodolistAC, RemoveTodoListAC } from './todolists-reducer';

let todolistId1: string;
let todolistId2: string;
let startState: TasksStateType;

beforeEach(() => {
  todolistId1 = v1();
  todolistId2 = v1();

  startState = {};
});

test('correct task should be removed', () => {
  const endState = tasksReducer(startState, RemoveTasksAC('3', todolistId2));

  expect(endState[todolistId1].length).toBe(4);
  expect(endState[todolistId2].length).toBe(2);
  expect(endState[todolistId2][1].title).toBe('Bread');
});

test('correct task should be change status', () => {
  const endState = tasksReducer(startState, ChangeTaskStatusAC(true, '3', todolistId1));

  expect(endState[todolistId1].find((t) => t.id === '3')?.isDone).toBe(true);
  expect(endState[todolistId1].find((t) => t.id === '2')?.isDone).toBe(false);
});

test('correct task should be change title', () => {
  const endState = tasksReducer(startState, ChangeTaskTitleAC('Book', '2', todolistId2));

  expect(endState[todolistId2].find((t) => t.id === '2')?.title).toBe('Book');
  expect(endState[todolistId2].find((t) => t.id === '1')?.title).toBe('Milk');
});

test('correct task should be add title', () => {
  const endState = tasksReducer(startState, AddTaskTitleAC('Book', todolistId2));

  expect(endState[todolistId2][2].title).toBe('Bread');
  expect(endState[todolistId2][1].title).toBe('Milk');
  expect(endState[todolistId2][0].title).toBe('Book');
});

test('new array should be added when new todolist is added', () => {
  const action = addTodolistAC('new todolist');
  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);
  const newKey = keys.find((k) => k != todolistId1 && k != todolistId2);
  if (!newKey) {
    throw Error('new key should be added');
  }

  expect(keys.length).toBe(3);
  expect(endState[newKey]).toEqual([]);
});

test('property with todolistId should be deleted', () => {
  const action = RemoveTodoListAC(todolistId2);
  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);
  expect(keys.length).toBe(1);
  expect(endState[todolistId2]).not.toBeDefined();
});
