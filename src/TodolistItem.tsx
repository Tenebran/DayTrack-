import React, { FC, useEffect } from 'react';
import { AddItemForm } from './AddItemForm';
import { EditebleSpan } from './EditebleSpan';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ButtonGroup, IconButton, List } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { useAppDispatch, useAppSelector } from './redux/store';
import {
  addTasksTC,
  changeTasksStatusTC,
  changeTasksTitleTC,
  getTasksTC,
  removeTasksTC,
} from './state/tasks-reducer';
import { delteTodolistTC, updateTodolistTC } from './state/todolists-reducer';
import { Task } from './Task';

const StyledButton = styled(Button)({
  margin: '0 2px',
});

const ButtonGroupWrapper = styled('div')({
  maxWidth: '100%',
});
type TodoListItemProps = {
  todoList: { id: string; title: string };
  currentFilter: 'all' | 'active' | 'completed';
  updateTodolistFilter: (id: string, filter: 'all' | 'active' | 'completed') => void;
};

export const TodoListItem: FC<TodoListItemProps> = ({
  todoList,
  currentFilter,
  updateTodolistFilter,
}) => {
  const tasks = useAppSelector((state) => state.tasks[todoList.id]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasksTC(todoList.id));
  }, [dispatch, todoList.id]);

  const deleteTodolist = () => {
    dispatch(delteTodolistTC(todoList.id));
  };

  const addNewTask = (title: string) => {
    dispatch(addTasksTC(title, todoList.id));
  };

  const changeTodolistTitle = (title: string) => {
    dispatch(updateTodolistTC(todoList.id, title));
  };

  const filteredTasks = tasks?.filter((task) => {
    if (currentFilter === 'active') return task.status === 0;
    if (currentFilter === 'completed') return task.status === 2;
    return true;
  });

  return (
    <div>
      <h3>
        <EditebleSpan title={todoList.title} changeTitleHandler={changeTodolistTitle} />
        <IconButton size="small" color="primary" onClick={deleteTodolist}>
          <CancelPresentationIcon />
        </IconButton>
      </h3>
      <AddItemForm todoListsID={todoList.id} addItem={addNewTask} maxLengthUserMeaasge={15} />
      <ButtonGroupWrapper>
        <ButtonGroup fullWidth>
          {['all', 'active', 'completed'].map((filter) => (
            <StyledButton
              key={filter}
              size="small"
              variant={currentFilter === filter ? 'contained' : 'outlined'}
              onClick={() => updateTodolistFilter(todoList.id, filter as any)}>
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </StyledButton>
          ))}
        </ButtonGroup>
      </ButtonGroupWrapper>

      <List>
        {filteredTasks?.length ? (
          filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              changeStatusHandler={(e) =>
                dispatch(changeTasksStatusTC(todoList.id, task.id, e.target.checked ? 2 : 0))
              }
              changeTaskTitleHandler={(title) =>
                dispatch(changeTasksTitleTC(todoList.id, task.id, title))
              }
              removeTaskHandler={() => dispatch(removeTasksTC(todoList.id, task.id))}
            />
          ))
        ) : (
          <span>Your task list is empty</span>
        )}
      </List>
    </div>
  );
};
