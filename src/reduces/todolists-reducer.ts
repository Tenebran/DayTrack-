import { v1 } from 'uuid';
import { TodoListType } from '../App';

export type FilterTaskType = 'all' | 'active' | 'completed';

export type RemoveTodolistAT = {
  type: 'REMOVE-TODOLIST';
  id: string;
};

export type AddTodoListAT = {
  type: 'ADD-TODOLIST';
  title: string;
};

export type ChangeTodoListTitleAT = {
  type: 'CHANGE-TODOLIST-TITLE';
  title: string;
  id: string;
};

export type ChangeTodoListFilterAT = {
  type: 'CHANGE-TODOLIST-FILTER';
  filter: FilterTaskType;
  id: string;
};

export type ActionType =
  | RemoveTodolistAT
  | AddTodoListAT
  | ChangeTodoListTitleAT
  | ChangeTodoListFilterAT;

export const todolistsReducer = (todoLists: TodoListType[], action: ActionType): TodoListType[] => {
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
    case 'CHANGE-TODOLIST-TITLE':
      return todoLists.map(t => (t.id === action.id ? { ...t, title: action.title } : t));
    case 'CHANGE-TODOLIST-FILTER':
      return todoLists.map(t => (t.id === action.id ? { ...t, filter: action.filter } : t));
    default:
      return todoLists;
  }
};
