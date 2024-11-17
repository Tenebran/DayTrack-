import axios, { AxiosResponse } from 'axios';
import { ResponseType, TodoListsApiType, TaskListApiType } from './type';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY,
  },
});

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

  updateTitleTask(todoListID: string, tasksID: string, title: string) {
    return instance.put<ResponseType>(`/todo-lists/${todoListID}/tasks/${tasksID}`, { title });
  },

  updateStatusTask(model: TaskListApiType) {
    return instance.put<ResponseType>(`/todo-lists/${model.todoListId}/tasks/${model.id}`, {
      ...model,
    });
  },

  getTasks(todoListID: string) {
    return instance.get<{ items: TaskListApiType[] }>(`/todo-lists/${todoListID}/tasks`);
  },

  createTasks(todoListID: string, title: string) {
    return instance.post<
      ResponseType<{ item: TaskListApiType }>,
      AxiosResponse<ResponseType<{ item: TaskListApiType }>>,
      { title: string }
    >(`/todo-lists/${todoListID}/tasks`, { title });
  },

  deleteTask(todoListID: string, tasksID: string) {
    return instance.delete<ResponseType>(`/todo-lists/${todoListID}/tasks/${tasksID}`);
  },
};
