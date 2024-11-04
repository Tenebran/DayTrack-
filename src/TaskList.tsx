import React, {  FC } from 'react';
import { TaskType } from './App';
import { EditebleSpan } from './EditebleSpan';

type TaskListProps = {
  task: TaskType;
  todoListsID: string;
  changeTaskStatus: (taskId: string, isDone: boolean, idTodolist: string) => void;
  changeTaskTitle: (taskId: string, title: string, idTodolist: string) => void;
  removeTask: (taskId: string, idTodolist: string) => void;
};

export const TaskList: FC<TaskListProps> = ({
  task,
  todoListsID,
  changeTaskStatus,
  changeTaskTitle,
  removeTask,
}) => {
  const changeStatusHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    changeTaskStatus(task.id, e.currentTarget.checked, todoListsID);
  };

  const changeTaskTitleHandler = (title: string) => {
    changeTaskTitle(task.id, title, todoListsID);
  };

  return (
    <>
      <li>
        <input id={task.id} type="checkbox" checked={task.isDone} onClick={changeStatusHandler} />
        <EditebleSpan
          title={task.title}
          spanClasses={task.isDone ? 'task-done' : 'task'}
          changeTitleHandler={changeTaskTitleHandler}
        />

        <button onClick={() => removeTask(task.id, todoListsID)}>x</button>
      </li>
    </>
  );
};
