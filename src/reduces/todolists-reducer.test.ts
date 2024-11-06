import { TodoListType } from '../App';
import {
  addTodolistAC,
  ChangeTodoListFilterAC,
  ChangeTodoListTitleAC,
  RemoveTodoListAC,
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

  const endState = todolistsReducer(startState, RemoveTodoListAC(todolistId1));

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

  const endState = todolistsReducer(startState, addTodolistAC(newTodolistTitle));

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

  const endState = todolistsReducer(
    startState,
    ChangeTodoListTitleAC(newTodolistTitle, todolistId1)
  );

  expect(endState.length).toBe(2);
  expect(endState[0].title).toBe(newTodolistTitle);
  expect(endState[1].title).not.toBe(newTodolistTitle);
});

test('correct todolist should be change filter', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  const startState: TodoListType[] = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ];

  const endState = todolistsReducer(startState, ChangeTodoListFilterAC('active', todolistId1));
  const endState2 = todolistsReducer(startState, ChangeTodoListFilterAC('completed', todolistId2));

  expect(endState.length).toBe(2);
  expect(endState[0].filter).toBe('active');
  expect(endState[0].filter).not.toBe('all');
  expect(endState2[1].filter).toBe('completed');
});
