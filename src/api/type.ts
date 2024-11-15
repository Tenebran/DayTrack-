export type TodoListsApiType = {
  addedDate: Date;
  id: string;
  order: number;
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
