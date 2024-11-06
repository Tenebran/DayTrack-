import { v1 } from 'uuid';
import { TasksStateType, TodoListType } from '../App';
import { ChangeTaskStatusAC, RemoveTasksAC, tasksReducer } from './tasks-reducer';

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

  const startState: TasksStateType = {
    [todolistId1]: [
      { id: v1(), isDone: true, title: 'HTML&CSS' },
      { id: v1(), isDone: true, title: 'JS' },
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

  // expect(endState[todolistId1].length).toBe(4);
  // expect(endState[todolistId2].length).toBe(2);
});
