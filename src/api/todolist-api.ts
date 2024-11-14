import axios, { AxiosResponse } from 'axios';
import { ResponseType, TodoListType, TaskListType } from './type';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY,
  },
});

export const todoListApi = {
  updateTodoList(todoListID: string, title: string) {
    return instance.put<ResponseType>(`/todo-lists/${todoListID}`, { title });
  },

  getTodoLists() {
    return instance.get<TodoListType[]>('/todo-lists');
  },

  deleteTodolist(todoListID: string) {
    return instance.delete<ResponseType>(`/todo-lists/${todoListID}`);
  },

  createTodolist(title: string) {
    return instance.post<ResponseType<{ item: TodoListType }>>('/todo-lists', { title });
  },

  updateTask(todoListID: string, tasksID: string, title: string) {
    return instance.put<ResponseType>(`/todo-lists/${todoListID}/tasks/${tasksID}`, { title });
  },

  getTasks(todoListID: string) {
    return instance.get<TaskListType[]>(`/todo-lists/${todoListID}/tasks`);
  },

  createTasks(todoListID: string, title: string) {
    return instance.post<
      ResponseType<{ item: TaskListType }>,
      AxiosResponse<ResponseType<{ item: TaskListType }>>,
      { title: string }
    >(`/todo-lists/${todoListID}/tasks`, {
      title,
    });
  },

  deleteTask(todoListID: string, tasksID: string) {
    return instance.delete<ResponseType>(`/todo-lists/${todoListID}/tasks/${tasksID}`);
  },
};
