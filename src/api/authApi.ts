import { AxiosResponse } from 'axios';
import { LoginData } from '../features/auth/Login';
import { ResponseType } from './type';
import { instance } from './todolist-api';

type UserType = {
  id: number;
  email: string;
  login: string;
};

export const authAPI = {
  me() {
    return instance.get<ResponseType<UserType>, any>(`/auth/me`);
  },

  logOut() {
    return instance.delete<ResponseType>(`/auth/login`);
  },

  login(data: LoginData) {
    return instance.post<
      ResponseType<{ userId: number }>,
      AxiosResponse<ResponseType<{ userId: number }>>,
      any
    >(`/auth/login`, data);
  },
};