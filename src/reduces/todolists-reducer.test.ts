import { TodoListType } from '../App';
import { todolistsReducer } from './todolists-reducer';
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
