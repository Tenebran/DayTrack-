import React, { ChangeEvent, FC } from 'react';
import { TaskType } from './App';
import { EditebleSpan } from './EditebleSpan';
import { Checkbox, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

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
  const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeTaskStatus(task.id, e.currentTarget.checked, todoListsID);
  };

  const changeTaskTitleHandler = (title: string) => {
    changeTaskTitle(task.id, title, todoListsID);
  };

  return (
    <>
      <li key={task.id}>
        <Checkbox id={task.id} checked={task.isDone} onChange={changeStatusHandler} />
        <EditebleSpan
          title={task.title}
          spanClasses={task.isDone ? 'task-done' : 'task'}
          changeTitleHandler={changeTaskTitleHandler}
        />
        <IconButton size={'small'} color="primary" onClick={() => removeTask(task.id, todoListsID)}>
          <CancelPresentationIcon />
        </IconButton>
      </li>
    </>
  );
};
