import { taskApi } from "features/tasks/tasks-api";
import React, { useEffect, useState } from "react";

export default {
  title: "API",
};

export const GetTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    taskApi
      .getTasks("6acfff44-a056-4886-a8bd-f3896e327f07")
      .then((resp) => setState(resp.data));
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};
export const CreateTasks = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    taskApi
      .createTasks(
        "dafff809-dbb3-4582-9cab-4d1390664668",
        "HELLO NEW TASK 2024",
      )
      .then((res) => {
        setState(res.data.data);
      });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};
export const DeleteTasks = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    taskApi
      .deleteTask(
        "6acfff44-a056-4886-a8bd-f3896e327f07",
        "12ceac66-7e96-4404-a090-d2b5be2d7127",
      )
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};

export const UpdateTaskTitle = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    taskApi
      .updateTitleTask(
        "6acfff44-a056-4886-a8bd-f3896e327f07",
        "d605d7e3-e3a5-4331-ae74-d83898f758ff",
        "REACT NEW TASK 2024",
      )
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};
