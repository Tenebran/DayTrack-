export type TodoListsApiType = {
  addedDate?: Date;
  id: string;
  order?: number;
  title: string;
};

export type TaskListApiType = {
  addedDate?: Date;
  deadline?: null | Date;
  description?: null | string;
  id: string;
  order?: number;
  priority?: number;
  startDate?: null | Date;
  status?: number;
  title: string;
  todoListId: string;
};

export type TaskListModelType = {
  addedDate?: Date;
  deadline?: null | Date;
  description?: null | string;
  id: string;
  order?: number;
  priority?: number;
  startDate?: null | Date;
  status?: number;
  title?: string;
  todoListId: string;
};

export type ResponseType<T = object> = {
  items(
    todolistID: string,
    items: any
  ): {
    readonly type: 'SET-TASKS';
    readonly tasks: TaskListApiType[];
    readonly todoID: string;
  };
  data: T;
  fieldErrors: string[];
  messages: string;
  resultCode: number;
};

export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
}

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4,
}
