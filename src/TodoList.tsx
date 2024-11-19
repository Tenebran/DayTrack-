import React, { FC, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Grid2, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from './redux/store';
import { TodoListItem } from 'TodolistItem';
import { Navigate } from 'react-router-dom';
import { addTodolistTC, SetTodolistsTC } from 'state/todolists-reducer';
import { AddItemForm } from 'AddItemForm';
import { getTasksTC } from 'state/tasks-reducer';

const StyledPaper = styled(Paper)({ padding: '16px', marginBottom: '16px' });

const StyledGridInput = styled(Grid2)({
  margin: '10px 0',
});

export type TodolistFilterValue = 'all' | 'active' | 'completed';

export type TodolistFilterType = {
  id: string;
  filter: TodolistFilterValue;
};

export const TodoList: FC = () => {
  const todoLists = useAppSelector((state) => state.todolists);
  const tasks = useAppSelector((state) => state.tasks);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const dispatch = useAppDispatch();

  const addTodoList = (title: string) => {
    dispatch(addTodolistTC(title));
  };
  // dispatch(getTasksTC(todoList.id));

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(SetTodolistsTC()).then((res) => {});
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <StyledGridInput container>
        <AddItemForm maxLengthUserMeaasge={15} addItem={addTodoList} />
      </StyledGridInput>
      <Grid2 container spacing={4} alignItems="stretch">
        {todoLists.map((todoList) => {
          return (
            <StyledPaper elevation={3} key={todoList.id}>
              <TodoListItem
                todoList={todoList}
                tasks={tasks[todoList.id]}
                isLoggedIn={isLoggedIn}
              />
            </StyledPaper>
          );
        })}
      </Grid2>
    </>
  );
};
