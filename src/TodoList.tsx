import React, { FC, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid2, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from './redux/store';
import { TodoListItem } from 'TodolistItem';
import { ChangeTodoListFilterAC, KeyType } from 'state/todolists-reducer';

const StyledPaper = styled(Paper)({ padding: '16px', marginBottom: '16px' });

export type TodolistFilterValue = 'all' | 'active' | 'completed';

export type TodolistFilterType = {
  id: string;
  filter: TodolistFilterValue;
};

export const TodoList: FC = () => {
  const todoLists = useAppSelector((state) => state.todolists);
  const dispatch = useAppDispatch();

  return (
    <Grid2 container spacing={4} alignItems="stretch">
      {todoLists.map((todoList) => {
        return (
          <>
            <StyledPaper elevation={3}>
              <TodoListItem todoList={todoList} />
            </StyledPaper>
          </>
        );
      })}
    </Grid2>
  );
};
