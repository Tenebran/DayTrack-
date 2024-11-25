import {
  TodolistDomainType,
  todolistsActions,
  todolistsReducer,
  todolistsThunk,
} from '../common/pages/Todolist/todolists-reducer';
import { v1 } from 'uuid';

let todolistId1: string;
let todolistId2: string;
let startState: TodolistDomainType[];

beforeEach(() => {
  todolistId1 = v1();
  todolistId2 = v1();

  startState = [
    { id: todolistId1, title: 'What to learn', filter: 'all', entityStatus: 'idle' },
    { id: todolistId2, title: 'What to buy', filter: 'all', entityStatus: 'idle' },
  ];
});

test('correct todolist should be removed', () => {
  const action = todolistsThunk.deleteTodolist.fulfilled(
    {
      id: todolistId1,
    },
    'requestId',
    {
      todolistId: todolistId1,
    }
  );
  const endState = todolistsReducer(startState, action);

  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
  const newTodolistTitle = 'New Todolist';
  const action = todolistsThunk.addTodolist.fulfilled(
    {
      todolist: {
        title: newTodolistTitle,
        id: v1(),
      },
    },
    'requestId',
    { title: newTodolistTitle }
  );
  const endState = todolistsReducer(startState, action);

  expect(endState.length).toBe(3);
  expect(endState[0].title).toBe(newTodolistTitle);
});

test('correct todolist should be change title', () => {
  const action = todolistsThunk.updateTodolist.fulfilled(
    {
      title: 'New Todolist',
      id: todolistId1,
    },
    'requestId',
    {
      title: 'New Todolist',
      todolistId: todolistId1,
    }
  );

  const endState = todolistsReducer(startState, action);

  expect(endState.length).toBe(2);
  expect(endState[0].title).toBe('New Todolist');
  expect(endState[1].title).not.toBe('New Todolist');
});

test('correct todolist should be change filter', () => {
  window.localStorage.clear();

  const todolists = [
    { id: 'todolistId1', title: 'What to learn' },
    { id: 'todolistId2', title: 'What to buy' },
  ];

  const initializeFilters = (todolists: { id: string; title: string }[]) => {
    const storedFilters = JSON.parse(localStorage.getItem('taskFilter') || '[]');
    const updatedFilters = [...storedFilters];

    todolists.forEach((todolist) => {
      if (!storedFilters.find((filter: { id: string }) => filter.id === todolist.id)) {
        updatedFilters.push({ id: todolist.id, filter: 'all' });
      }
    });

    localStorage.setItem('taskFilter', JSON.stringify(updatedFilters));
  };

  initializeFilters(todolists);

  const filters = JSON.parse(localStorage.getItem('taskFilter') || '[]');
  expect(filters.length).toBe(2);
  expect(filters).toEqual([
    { id: 'todolistId1', filter: 'all' },
    { id: 'todolistId2', filter: 'all' },
  ]);
});
