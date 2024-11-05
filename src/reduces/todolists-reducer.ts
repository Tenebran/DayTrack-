import { v1 } from 'uuid';
import { TodoListType } from '../App';

export type RemoveTodolistAC = {
  type: 'REMOVE-TODOLIST';
  id: string;
};

export type AddTodoListAC = {
  type: 'ADD-TODOLIST';
  title: string;
};

export const todolistsReducer = (
  todoLists: TodoListType[],
  action: RemoveTodolistAC | AddTodoListAC
): TodoListType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST':
      return todoLists.filter(t => t.id !== action.id);
    case 'ADD-TODOLIST':
      const newTodoList: TodoListType = {
        id: v1(),
        title: action.title,
        filter: 'all',
      };

      return [...todoLists, newTodoList];
    default:
      return todoLists;
  }
};
