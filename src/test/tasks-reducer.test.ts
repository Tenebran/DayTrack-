import { v1 } from 'uuid';
import { tasksActions, tasksReducer, TasksStateType, taskThunks } from '../state/tasks-reducer';
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
  const action = taskThunks.updateTask.fulfilled(
    { title: 'Book', todolistId: todolistId2, taskID: '2' },
    'requestId',
    { title: 'Book', todolistID: todolistId2, taskID: '2' }
  );
  const endState = tasksReducer(startState, action);

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

  expect(endState[todolistId2][0].title).toBe('New Task');
  expect(endState[todolistId2][1].title).toBe('Milk');
});

test('correct task should be added to correct array', () => {
  const task = {
    todoListId: todolistId2,
    title: 'juce',
    status: 0,
    addedDate: '',
    deadline: '',
    description: '',
    order: 0,
    priority: 0,
    startDate: '',
    id: 'id exists',
  };
  const action = taskThunks.addTask.fulfilled(
    {
      task,
    },
    'requestId',
    { title: task.title, todolistID: task.todoListId }
  );

  const endState = tasksReducer(startState, action);

  expect(endState[todolistId1].length).toBe(4);
  expect(endState[todolistId2].length).toBe(4);
  expect(endState[todolistId2][0].id).toBeDefined();
  expect(endState[todolistId2][0].title).toBe('juce');
  expect(endState[todolistId2][0].status).toBe(0);
});

test('tasks should be added for todolist', () => {
  const action = taskThunks.getTasks.fulfilled(
    {
      tasks: startState[todolistId1],
      todolistID: todolistId1,
    },
    'requestId',
    todolistId1
  );

  const endState = tasksReducer(
    {
      [todolistId2]: [],
      [todolistId1]: [],
    },
    action
  );

  expect(endState[todolistId1].length).toBe(4);
  expect(endState[todolistId2].length).toBe(0);
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
