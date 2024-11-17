import React, { FC, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Grid2, Paper } from '@mui/material';
import { useAppSelector } from './redux/store';
import { TodoListItem } from 'TodolistItem';

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
