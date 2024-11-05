import { TodoListType } from '../App';

export type RemoveTodolistAC = {
  type: 'REMOVE-TODOLIST';
  id: string;
};

export const todolistsReducer = (
  todolists: TodoListType[],
  action: RemoveTodolistAC
): TodoListType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST':
      return todolists.filter(t => t.id !== action.id);
    default:
      return todolists;
  }
};
