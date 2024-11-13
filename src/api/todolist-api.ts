import axios from 'axios';

const config = {
  withCredentials: true,
  headers: { 'API-KEY': process.env.REACT_APP_API_KEY },
};

export const todoListApi = {
  updateTodoList(todoListID: string, title: string) {
    return axios.put(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoListID}`,
      { title },
      config
    );
  },

  getTodoLists() {
    return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', config);
  },

  deleteTodolist(todoListID: string) {
    return axios.delete(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoListID}`,
      config
    );
  },

  createTodolis(title: string) {
    return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', { title }, config);
  },
};
