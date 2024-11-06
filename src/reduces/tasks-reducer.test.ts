import { v1 } from 'uuid';
import { TasksStateType } from '../App';
import {
  AddTaskTitleAC,
  ChangeTaskStatusAC,
  ChangeTaskTitleAC,
  RemoveTasksAC,
  tasksReducer,
} from './tasks-reducer';
import { addTodolistAC, RemoveTodoListAC, todolistsReducer } from './todolists-reducer';

test('correct task should be removed', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let taskId = v1();

  const startState: TasksStateType = {
    [todolistId1]: [
      { id: v1(), isDone: true, title: 'HTML&CSS' },
      { id: v1(), isDone: true, title: 'JS' },
      { id: v1(), isDone: false, title: 'React' },
      { id: v1(), isDone: true, title: 'Redux' },
    ],

    [todolistId2]: [
      { id: v1(), isDone: true, title: 'Milk' },
      { id: v1(), isDone: true, title: 'Bread' },
      { id: taskId, isDone: false, title: 'Meat' },
    ],
  };

  const endState = tasksReducer(startState, RemoveTasksAC(taskId, todolistId2));

  expect(endState[todolistId1].length).toBe(4);
  expect(endState[todolistId2].length).toBe(2);
  expect(endState[todolistId2][1].title).toBe('Bread');
});

test('correct task should be change status', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let taskId = v1();
  let taskId2 = v1();

  const startState: TasksStateType = {
    [todolistId1]: [
      { id: v1(), isDone: true, title: 'HTML&CSS' },
      { id: taskId2, isDone: false, title: 'JS' },
      { id: taskId, isDone: false, title: 'React' },
      { id: v1(), isDone: true, title: 'Redux' },
    ],

    [todolistId2]: [
      { id: v1(), isDone: true, title: 'Milk' },
      { id: v1(), isDone: true, title: 'Bread' },
      { id: v1(), isDone: false, title: 'Meat' },
    ],
  };

  const endState = tasksReducer(startState, ChangeTaskStatusAC(true, taskId, todolistId1));

  expect(endState[todolistId1].find(t => t.id === taskId)?.isDone).toBe(true);
  expect(endState[todolistId1].find(t => t.id === taskId2)?.isDone).toBe(false);
});

test('correct task should be change title', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let taskId = v1();
  let taskId2 = v1();

  const startState: TasksStateType = {
    [todolistId1]: [
      { id: v1(), isDone: true, title: 'HTML&CSS' },
      { id: v1(), isDone: false, title: 'JS' },
      { id: v1(), isDone: false, title: 'React' },
      { id: v1(), isDone: true, title: 'Redux' },
    ],

    [todolistId2]: [
      { id: taskId2, isDone: true, title: 'Milk' },
      { id: taskId, isDone: true, title: 'Bread' },
      { id: v1(), isDone: false, title: 'Meat' },
    ],
  };

  const endState = tasksReducer(startState, ChangeTaskTitleAC('Book', taskId, todolistId2));

  expect(endState[todolistId2].find(t => t.id === taskId)?.title).toBe('Book');
  expect(endState[todolistId2].find(t => t.id === taskId2)?.title).toBe('Milk');
});

test('correct task should be add title', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  const startState: TasksStateType = {
    [todolistId1]: [
      { id: v1(), isDone: true, title: 'HTML&CSS' },
      { id: v1(), isDone: false, title: 'JS' },
      { id: v1(), isDone: false, title: 'React' },
      { id: v1(), isDone: true, title: 'Redux' },
    ],

    [todolistId2]: [
      { id: v1(), isDone: true, title: 'Milk' },
      { id: v1(), isDone: true, title: 'Bread' },
      { id: v1(), isDone: false, title: 'Meat' },
    ],
  };

  const endState = tasksReducer(startState, AddTaskTitleAC('Book', todolistId2));

  expect(endState[todolistId2][2].title).toBe('Bread');
  expect(endState[todolistId2][1].title).toBe('Milk');
  expect(endState[todolistId2][0].title).toBe('Book');
});

test('new array should be added when new todolist is added', () => {
  const startState: TasksStateType = {
    todolistId1: [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false },
    ],
    todolistId2: [
      { id: '1', title: 'bread', isDone: false },
      { id: '2', title: 'milk', isDone: true },
      { id: '3', title: 'tea', isDone: false },
    ],
  };

  const action = addTodolistAC('new todolist');
  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);
  const newKey = keys.find(k => k != 'todolistId1' && k != 'todolistId2');
  if (!newKey) {
    throw Error('new key should be added');
  }

  expect(keys.length).toBe(3);
  expect(endState[newKey]).toEqual([]);
});

test('property with todolistId should be deleted', () => {
  const startState: TasksStateType = {
    todolistId1: [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false },
    ],
    todolistId2: [
      { id: '1', title: 'bread', isDone: false },
      { id: '2', title: 'milk', isDone: true },
      { id: '3', title: 'tea', isDone: false },
    ],
  };

  const action = RemoveTodoListAC('todolistId2');
  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);
  expect(keys.length).toBe(1);
  expect(endState['todolistId2']).not.toBeDefined();
});
