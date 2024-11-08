import React, { ChangeEvent, FC } from 'react';
import { EditebleSpan } from './EditebleSpan';
import { Checkbox, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import {
  ChangeTaskStatusAC,
  ChangeTaskTitleAC,
  RemoveTasksAC,
  TaskType,
} from './reduces/tasks-reducer';
import { useDispatch } from 'react-redux';

type TaskListProps = {
  task: TaskType;
  todoListsID: string;
};

export const TaskList: FC<TaskListProps> = ({ task, todoListsID }) => {
  const dispatch = useDispatch();

  const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ChangeTaskStatusAC(e.currentTarget.checked, task.id, todoListsID));
  };

  const changeTaskTitleHandler = (title: string) => {
    dispatch(ChangeTaskTitleAC(title, task.id, todoListsID));
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
        <IconButton
          size={'small'}
          color="primary"
          onClick={() => dispatch(RemoveTasksAC(task.id, todoListsID))}
        >
          <CancelPresentationIcon />
        </IconButton>
      </li>
    </>
  );
};
