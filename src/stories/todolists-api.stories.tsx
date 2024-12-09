import { todoListApi } from "features/todolists/todolist-api";
import React, { useEffect, useState } from "react";

export default {
  title: "API",
};

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    todoListApi.getTodoLists().then((resp) => setState(resp.data));
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};
export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    todoListApi.createTodolist("HELLO NEW TODOLIST").then((res) => {
      setState(res.data.data.item);
    });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};
export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    todoListApi
      .deleteTodolist("17c4cefe-2202-4b8d-8e7f-b9c6751111be")
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {6
    todoListApi
      .updateTodoList("dafff809-dbb3-4582-9cab-4d1390664668", "REACT")
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};
