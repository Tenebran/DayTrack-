import React, { ChangeEvent, FC } from 'react';
import { EditebleSpan } from './EditebleSpan';
import { Checkbox, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { TaskType } from './reduces/tasks-reducer';

export type TaskProps = {
  task: TaskType;
  todoListsID: string;
  changeStatusHandler: (e: ChangeEvent<HTMLInputElement>, taskID: string) => void;
  changeTaskTitleHandler: (title: string, taskID: string) => void;
  removeTaskHandler: (taskID: string) => void;
};

export const Task: FC<TaskProps> = ({
  task,
  todoListsID,
  changeStatusHandler,
  changeTaskTitleHandler,
  removeTaskHandler,
}) => {
  const changeTaskTitle = (title: string) => {
    changeTaskTitleHandler(title, task.id);
  };
  return (
    <>
      <li key={task.id}>
        <Checkbox
          id={task.id}
          checked={task.isDone}
          onChange={(e) => changeStatusHandler(e, task.id)}
        />
        <EditebleSpan title={task.title} changeTitleHandler={changeTaskTitle} />
        <IconButton size={'small'} color="primary" onClick={() => removeTaskHandler(task.id)}>
          <CancelPresentationIcon />
        </IconButton>
      </li>
    </>
  );
};
