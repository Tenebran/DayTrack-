import React, { FC, useEffect } from 'react';
import { AddItemForm } from './AddItemForm';
import { EditebleSpan } from './EditebleSpan';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ButtonGroup, IconButton, List } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { useAppDispatch } from './redux/store';
import {
  addTasksTC,
  changeTasksStatusTC,
  changeTasksTitleTC,
  getTasksTC,
  removeTasksTC,
} from './state/tasks-reducer';
import {
  ChangeTodoListFilterAC,
  DelteTodolistTC,
  KeyType,
  TodolistDomainType,
  UpdateTodolistTC,
} from './state/todolists-reducer';
import { Task } from './Task';
import { TaskListApiType } from 'api/type';

const StyledButton = styled(Button)({
  margin: '0 2px',
});

const ButtonGroupWrapper = styled('div')({
  maxWidth: '100%',
});
type TodoListItemProps = {
  todoList: TodolistDomainType;
  tasks: TaskListApiType[];
};

export const TodoListItem: FC<TodoListItemProps> = ({ todoList, tasks }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasksTC(todoList.id));
  }, [dispatch, todoList.id]);

  const deleteTodolist = () => {
    dispatch(DelteTodolistTC(todoList.id));
  };

  const addNewTask = (title: string) => {
    dispatch(addTasksTC(title, todoList.id));
  };

  const changeTodolistTitle = (title: string) => {
    dispatch(UpdateTodolistTC(todoList.id, title));
  };

  const changeFilter = (changeValue: KeyType, todolistId: string) => {
    dispatch(ChangeTodoListFilterAC(changeValue, todolistId));
  };

  let filteredTask = tasks;

  if (todoList.filter === 'active') {
    filteredTask = tasks.filter((list) => list.status === 0);
  } else if (todoList.filter === 'completed') {
    filteredTask = tasks.filter((list) => list.status === 2);
  }

  return (
    <div>
      <h3>
        <EditebleSpan title={todoList.title} changeTitleHandler={changeTodolistTitle} />
        <IconButton
          size="small"
          color="primary"
          onClick={deleteTodolist}
          disabled={todoList.entityStatus === 'loading'}>
          <CancelPresentationIcon />
        </IconButton>
      </h3>
      <AddItemForm
        todoListsID={todoList.id}
        addItem={addNewTask}
        maxLengthUserMeaasge={15}
        disabled={todoList.entityStatus === 'loading'}
      />
      <ButtonGroupWrapper>
        <ButtonGroup fullWidth>
          {['all', 'active', 'completed'].map((filter) => (
            <StyledButton
              key={filter}
              size="small"
              variant={todoList.filter === filter ? 'contained' : 'outlined'}
              onClick={() => changeFilter(filter as KeyType, todoList.id)}>
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </StyledButton>
          ))}
        </ButtonGroup>
      </ButtonGroupWrapper>

      <List>
        {filteredTask?.length ? (
          filteredTask.map((task) => (
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
