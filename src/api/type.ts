export type TodoListType = {
  addedDate: Date;
  id: string;
  order: number;
  title: string;
};

export type TaskListType = {
  items: {
    addedDate: Date;
    deadline: null | Date;
    description: null | string;
    id: string;
    order: number;
    priority: number;
    startDate: null | Date;
    status: number;
    title: string;
    todoListId: string;
  };
};

export type ResponseType<T = object> = {
  data: T;
  fieldErrors: string[];
  messages: string;
  resultCode: number;
};
