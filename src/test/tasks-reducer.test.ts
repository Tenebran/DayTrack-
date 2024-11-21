import { v1 } from 'uuid';
import { tasksActions, tasksReducer, TasksStateType } from '../state/tasks-reducer';
import { TaskListApiType } from '../api/type';
import { todolistsActions } from '../state/todolists-reducer';

let todolistId1: string;
let todolistId2: string;
let startState: TasksStateType;

beforeEach(() => {
  todolistId1 = v1();
  todolistId2 = v1();

  startState = {
    [todolistId1]: [
      { id: '1', status: 0, title: 'HTML&CSS', todoListId: todolistId1 },
      { id: '2', status: 0, title: 'JS', todoListId: todolistId1 },
      { id: '3', status: 0, title: 'React', todoListId: todolistId1 },
      { id: '4', status: 0, title: 'Redux', todoListId: todolistId1 },
    ],

    [todolistId2]: [
      { id: '1', status: 0, title: 'Milk', todoListId: todolistId2 },
      { id: '2', status: 0, title: 'Bread', todoListId: todolistId2 },
      { id: '3', status: 0, title: 'Meat', todoListId: todolistId2 },
    ],
  };
});

test('correct task should be removed', () => {
  const endState = tasksReducer(
    startState,
    tasksActions.removeTask({ id: '2', todolistId: todolistId2 })
  );

  expect(endState[todolistId1].length).toBe(4);
  expect(endState[todolistId2].length).toBe(2);
  expect(endState[todolistId2][1].title).toBe('Meat');
});

test('correct task should be change status', () => {
  const endState = tasksReducer(
    startState,
    tasksActions.changeTaskStatus({ status: 2, id: '3', todolistId: todolistId1 })
  );

  expect(endState[todolistId1].find((t) => t.id === '3')?.status).toBe(2);
  expect(endState[todolistId1].find((t) => t.id === '2')?.status).toBe(0);
});

test('correct task should be change title', () => {
  const endState = tasksReducer(
    startState,
    tasksActions.changeTaskTitle({ title: 'Book', id: '2', todolistId: todolistId2 })
  );

  expect(endState[todolistId2].find((t) => t.id === '2')?.title).toBe('Book');
  expect(endState[todolistId2].find((t) => t.id === '1')?.title).toBe('Milk');
});

test('correct task should be added', () => {
  const newTask: TaskListApiType = {
    id: v1(),
    status: 0,
    title: 'New Task',
    todoListId: todolistId2,
  };

  const endState = tasksReducer(startState, tasksActions.createTask({ task: newTask }));

  console.log('endState[todolistId2]', endState[todolistId2]);

  expect(endState[todolistId2][0].title).toBe('New Task');
  expect(endState[todolistId2][1].title).toBe('Milk');
});

test('new array should be added when new todolist is added', () => {
  const action = todolistsActions.addTodolist({ todolist: { title: 'new todolist', id: v1() } });
  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);
  const newKey = keys.find((k) => k !== todolistId1 && k !== todolistId2);
  if (!newKey) {
    throw Error('new key should be added');
  }

  expect(keys.length).toBe(3);
  expect(endState[newKey]).toEqual([]);
});

test('property with todolistId should be deleted', () => {
  const action = todolistsActions.removeTodoList({ id: todolistId2 });
  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);
  expect(keys.length).toBe(1);
  expect(endState[todolistId2]).not.toBeDefined();
});
