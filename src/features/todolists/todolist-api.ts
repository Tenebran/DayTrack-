import axios, { AxiosResponse } from 'axios';
import { ResponseType, TodoListsApiType, TaskListApiType } from './type';
import { instance } from './commin.api';

export const todoListApi = {
  updateTodoList(todoListID: string, title: string) {
    return instance.put<
      ResponseType<{ item: TodoListsApiType }>,
      AxiosResponse<ResponseType<{ item: TodoListsApiType }>>,
      { todoListID: string; title: string }
    >(`/todo-lists/${todoListID}`, { todoListID, title });
  },

  getTodoLists() {
    return instance.get<TodoListsApiType[]>('/todo-lists');
  },

  deleteTodolist(todoListID: string) {
    return instance.delete<ResponseType>(`/todo-lists/${todoListID}`);
  },

  createTodolist(title: string) {
    return instance.post<
      ResponseType<{ item: TodoListsApiType }>,
      AxiosResponse<ResponseType<{ item: TodoListsApiType }>>,
      { title: string }
    >('/todo-lists', { title });
  },
};
