import { TodoListType } from '../App';
import { AddTodoListAC, todolistsReducer } from './todolists-reducer';
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

  const action: AddTodoListAC = { type: 'ADD-TODOLIST', title: newTodolistTitle };
  const endState = todolistsReducer(startState, action);

  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe(newTodolistTitle);
});
