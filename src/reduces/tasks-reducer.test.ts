import { v1 } from 'uuid';
import { TasksStateType } from '../App';
import {
  ChangeTaskStatusAC,
  ChangeTaskTitleAC,
  RemoveTasksAC,
  tasksReducer,
} from './tasks-reducer';

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
