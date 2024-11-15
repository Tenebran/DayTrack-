import { todoListApi } from 'api/todolist-api';
import { TodoListsApiType } from 'api/type';
import { Dispatch } from 'redux';
import { v1 } from 'uuid';

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterTaskType;
};

export type FilterTaskType = 'all' | 'active' | 'completed';

export type RemoveTodolistAT = {
  type: 'REMOVE-TODOLIST';
  id: string;
};

export type AddTodoListAT = {
  type: 'ADD-TODOLIST';
  title: string;
  todolistID: string;
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

export type ActionTypeTodolists =
  | RemoveTodolistAT
  | AddTodoListAT
  | ChangeTodoListTitleAT
  | ChangeTodoListFilterAT
  | _SetTodosType;

export type _SetTodosType = ReturnType<typeof setTodolistsAC>;

const initialState: TodoListType[] = [];

export const todolistsReducer = (
  todoLists: TodoListType[] = initialState,
  action: ActionTypeTodolists
): TodoListType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST':
      return todoLists.filter((t) => t.id !== action.id);
    case 'ADD-TODOLIST': {
      const newTodoList: TodoListType = {
        id: action.todolistID,
        title: action.title,
        filter: 'all',
      };
      return [...todoLists, newTodoList];
    }
    case 'CHANGE-TODOLIST-TITLE':
      return todoLists.map((t) => (t.id === action.id ? { ...t, title: action.title } : t));
    case 'CHANGE-TODOLIST-FILTER':
      return todoLists.map((t) => (t.id === action.id ? { ...t, filter: action.filter } : t));
    case 'SET-TODOS':
      return action.todos.map((tl) => ({ ...tl, filter: 'all' }));
    default:
      return todoLists;
  }
};

export const RemoveTodoListAC = (id: string): RemoveTodolistAT => ({ type: 'REMOVE-TODOLIST', id });
export const addTodolistAC = (title: string): AddTodoListAT => ({
  type: 'ADD-TODOLIST',
  title,
  todolistID: v1(),
});
export const ChangeTodoListTitleAC = (title: string, id: string): ChangeTodoListTitleAT => ({
  type: 'CHANGE-TODOLIST-TITLE',
  title,
  id,
});

export const ChangeTodoListFilterAC = (
  filter: FilterTaskType,
  id: string
): ChangeTodoListFilterAT => ({
  type: 'CHANGE-TODOLIST-FILTER',
  filter,
  id,
});

export const setTodolistsAC = (todos: TodoListsApiType[]) =>
  ({
    type: 'SET-TODOS',
    todos,
  }) as const;

export const setTodolistsTC = () => (dispatch: Dispatch) => {
  return todoListApi.getTodoLists().then((res) => {
    dispatch(setTodolistsAC(res.data));
  });
};
