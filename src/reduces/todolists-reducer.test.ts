import { TodoListType } from '../App';
import {
  AddTodoListAT,
  ChangeTodoListFilterAT,
  ChangeTodoListTitleAT,
  todolistsReducer,
} from './todolists-reducer';
import { v1 } from 'uuid';

test('correct todolist should be removed', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  const startState: TodoListType[] = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ];

  const endState = todolistsReducer(startState, { id: todolistId1, type: 'REMOVE-TODOLIST' });

  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let newTodolistTitle = 'New Todolist';

  const startState: TodoListType[] = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ];

  const action: AddTodoListAT = { type: 'ADD-TODOLIST', title: newTodolistTitle };
  const endState = todolistsReducer(startState, action);

  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe(newTodolistTitle);
});

test('correct todolist should be change title', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let newTodolistTitle = 'New Todolist';

  const startState: TodoListType[] = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ];

  const action: ChangeTodoListTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE',
    title: newTodolistTitle,
    id: todolistId1,
  };
  const endState = todolistsReducer(startState, action);

  expect(endState.length).toBe(2);
  expect(endState[0].title).toBe(newTodolistTitle);
});

test('correct todolist should be change filter', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  const startState: TodoListType[] = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ];

  const action: ChangeTodoListFilterAT = {
    type: 'CHANGE-TODOLIST-FILTER',
    filter: 'active',
    id: todolistId1,
  };

  const action2: ChangeTodoListFilterAT = {
    type: 'CHANGE-TODOLIST-FILTER',
    filter: 'completed',
    id: todolistId2,
  };
  const endState = todolistsReducer(startState, action);
  const endState2 = todolistsReducer(startState, action2);

  expect(endState.length).toBe(2);
  expect(endState[0].filter).toBe('active');
  expect(endState2[1].filter).toBe('completed');
});
