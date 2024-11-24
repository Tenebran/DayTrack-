import React, { ChangeEvent, FC } from 'react';
import { EditebleSpan } from '../EditebleSpan';
import { Checkbox, IconButton, ListItem } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { TaskListApiType } from 'api/type';

export type TaskProps = {
  task: TaskListApiType;
  changeStatusHandler: (e: ChangeEvent<HTMLInputElement>, taskID: string, title: string) => void;
  changeTaskTitleHandler: (title: string) => void;
  removeTaskHandler: (taskID: string) => void;
};

export const Task: FC<TaskProps> = ({
  task,
  changeStatusHandler,
  changeTaskTitleHandler,
  removeTaskHandler,
}) => {
  return (
    <>
      <ListItem key={task.id}>
        <Checkbox
          id={task.id}
          checked={task.status === 2}
          onChange={(e) => changeStatusHandler(e, task.id, task.title)}
        />
        <EditebleSpan title={task.title} changeTitleHandler={changeTaskTitleHandler} />
        <IconButton size={'small'} color="primary" onClick={() => removeTaskHandler(task.id)}>
          <CancelPresentationIcon />
        </IconButton>
      </ListItem>
    </>
  );
};
