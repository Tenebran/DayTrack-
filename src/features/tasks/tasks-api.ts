import { AxiosResponse } from "axios";
import { instance } from "../../api/commin.api";
import { TaskListApiType, ResponseType } from "../../api/type";

export const taskApi = {
  updateTitleTask(todoListID: string, tasksID: string, title: string) {
    return instance.put<ResponseType>(
      `/todo-lists/${todoListID}/tasks/${tasksID}`,
      { title },
    );
  },

  updateStatusTask(model: TaskListApiType) {
    return instance.put<ResponseType>(
      `/todo-lists/${model.todoListId}/tasks/${model.id}`,
      {
        ...model,
      },
    );
  },

  getTasks(todoListID: string) {
    return instance.get<{ items: TaskListApiType[] }>(
      `/todo-lists/${todoListID}/tasks`,
    );
  },

  createTasks(todoListID: string, title: string) {
    return instance.post<
      ResponseType<{ item: TaskListApiType }>,
      AxiosResponse<ResponseType<{ item: TaskListApiType }>>,
      { title: string }
    >(`/todo-lists/${todoListID}/tasks`, { title });
  },

  deleteTask(todoListID: string, tasksID: string) {
    return instance.delete<ResponseType>(
      `/todo-lists/${todoListID}/tasks/${tasksID}`,
    );
  },
};
