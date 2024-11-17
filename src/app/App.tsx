import React, { useEffect, useState } from 'react';
import './App.scss';
import { TodoList } from '../TodoList';
import { AddItemForm } from '../AddItemForm';
import {
  AppBar,
  Button,
  Container,
  Grid2,
  IconButton,
  LinearProgress,
  Paper,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { addTodolistAC, addTodolistTC, setTodolistsTC } from '../state/todolists-reducer';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { RequestStatusType } from '../state/app-reducer';
import { TodoListsApiType } from 'api/type';

const StyledGridInput = styled(Grid2)({
  margin: '10px 0',
});

export function App() {
  const status = useAppSelector<RequestStatusType>((state) => state.app.status);

  const dispatch = useAppDispatch();

  const addTodoList = (title: string) => {
    dispatch(addTodolistTC(title));
  };

  useEffect(() => {
    dispatch(setTodolistsTC());
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todolists
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {status === 'loading' && <LinearProgress />}
      <Container>
        <StyledGridInput container>
          <AddItemForm maxLengthUserMeaasge={15} addItem={addTodoList} />
        </StyledGridInput>
        <TodoList />
      </Container>
    </>
  );
}
