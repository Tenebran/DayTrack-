import React from 'react';
import { EditebleSpan } from '../EditebleSpan';
import { Checkbox, IconButton, ListItem } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { TaskListApiType } from '../../../api/type';
import { taskThunks } from '../../../features/tasks/tasks-reducer';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';

export type TaskPropsType = {
  task: TaskListApiType;
  todolistID: string;
};

export const Task = ({ task, todolistID }: TaskPropsType) => {
  const dispatch = useAppDispatch();

  const removeTask = (todolistID: string, taskID: string) => {
    dispatch(taskThunks.removeTask({ todolistID, taskID }));
  };

  const changeTaskStatus = (
    todoListId: string,
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      taskThunks.updateTask({
        id,
        todoListId,
        status: event.target.checked ? 2 : 0,
      })
    );
  };

  const changeTasksTitle = (todoListId: string, id: string, title: string) => {
    dispatch(taskThunks.updateTask({ todoListId, id, title }));
  };

  return (
    <>
      <ListItem key={task.id}>
        <Checkbox
          id={task.id}
          checked={task.status === 2}
          onChange={(e) => changeTaskStatus(todolistID, task.id, e)}
        />
        <EditebleSpan
          title={task.title}
          changeTitleHandler={(title) => changeTasksTitle(todolistID, task.id, title)}
        />
        <IconButton size={'small'} color="primary" onClick={() => removeTask(todolistID, task.id)}>
          <CancelPresentationIcon />
        </IconButton>
      </ListItem>
    </>
  );
};
