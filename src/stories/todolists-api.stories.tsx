import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default {
  title: 'API',
};

const config = {
  withCredentials: true,
  headers: { 'API-KEY': process.env.REACT_APP_API_KEY },
};

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', config).then((resp) => {
      setState(resp.data);
    });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};
export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    axios
      .post(
        'https://social-network.samuraijs.com/api/1.1/todo-lists',
        { title: 'newTodolist' },
        config
      )
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};
export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    axios
      .delete(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${'9c3e0356-c492-4243-a2a3-e5d99f85435f'}`,
        config
      )
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    axios
      .put(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${'6acfff44-a056-4886-a8bd-f3896e327f07'}`,
        { title: 'React' },
        config
      )
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};
