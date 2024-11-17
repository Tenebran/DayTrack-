import React, { FC, useEffect, useState } from 'react';
import { AddItemForm } from './AddItemForm';
import { EditebleSpan } from './EditebleSpan';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ButtonGroup, Grid2, IconButton, List, Paper } from '@mui/material';
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

const StyledPaper = styled(Paper)({ padding: '16px', marginBottom: '16px' });

export type TodolistFilterValue = 'all' | 'active' | 'completed';

export type TodolistFilterType = {
  id: string;
  filter: TodolistFilterValue;
};

export const TodoList: FC = () => {
  const todoLists = useAppSelector((state) => state.todolists);
  const [todolistFilter, setTodolistFilter] = useState<TodolistFilterType[]>(() => {
    const storedFilter = localStorage.getItem('taskFilter');
    return storedFilter ? JSON.parse(storedFilter) : [];
  });

  useEffect(() => {
    const updatedFilters = [...todolistFilter];

    todoLists.forEach((todolist) => {
      if (!todolistFilter.find((filter) => filter.id === todolist.id)) {
        updatedFilters.push({ id: todolist.id, filter: 'all' });
      }
    });

    if (updatedFilters.length !== todolistFilter.length) {
      setTodolistFilter(updatedFilters);
      localStorage.setItem('taskFilter', JSON.stringify(updatedFilters));
    }
  }, [todoLists]);

  const updateTodolistFilter = (id: string, newFilter: 'all' | 'active' | 'completed') => {
    const updatedFilters = todolistFilter.map((filter) =>
      filter.id === id ? { ...filter, filter: newFilter } : filter
    );
    setTodolistFilter(updatedFilters);
    localStorage.setItem('taskFilter', JSON.stringify(updatedFilters));
  };

  return (
    <Grid2 container spacing={4} alignItems="stretch">
      {todoLists.map((todoList) => {
        const currentFilter =
          todolistFilter.find((filter) => filter.id === todoList.id)?.filter || 'all';
        return (
          <>
            <StyledPaper elevation={3}>
              <TodoListItem
                todoList={todoList}
                currentFilter={currentFilter}
                updateTodolistFilter={updateTodolistFilter}
              />
            </StyledPaper>
          </>
        );
      })}
    </Grid2>
  );
};

type TodoListItemProps = {
  todoList: { id: string; title: string };
  currentFilter: 'all' | 'active' | 'completed';
  updateTodolistFilter: (id: string, filter: 'all' | 'active' | 'completed') => void;
};

const TodoListItem: FC<TodoListItemProps> = ({ todoList, currentFilter, updateTodolistFilter }) => {
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
