import React, { FC } from 'react';
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
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <Grid2 container spacing={4} alignItems="stretch">
      {todoLists.map((todoList) => {
        return (
          <StyledPaper elevation={3} key={todoList.id}>
            <TodoListItem todoList={todoList} tasks={tasks[todoList.id]} />
          </StyledPaper>
        );
      })}
    </Grid2>
  );
};
