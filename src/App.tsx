import React, { useEffect } from 'react';
import './App.scss';
import { TodoList } from './TodoList';
import { AddItemForm } from './AddItemForm';
import {
  AppBar,
  Button,
  Container,
  Grid2,
  IconButton,
  Paper,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { addTodolistAC, setTodolistsTC, TodoListType } from './state/todolists-reducer';

import { useAppDispatch, useAppSelector } from './redux/store';

const StyledGridInput = styled(Grid2)({
  margin: '10px 0',
});
const StyledPaper = styled(Paper)({
  padding: '15px',
});

export function App() {
  const todoLists = useAppSelector<TodoListType[]>((state) => state.todolists);

  const dispatch = useAppDispatch();

  const addTodoList = (title: string) => {
    dispatch(addTodolistAC(title));
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

      <Container>
        <StyledGridInput container>
          <AddItemForm maxLengthUserMeaasge={15} addItem={addTodoList} />
        </StyledGridInput>
        <Grid2 container spacing={4}>
          {todoLists.map((t) => {
            return (
              <StyledPaper elevation={3} variant="outlined" key={t.id}>
                <TodoList todoLists={t} />
              </StyledPaper>
            );
          })}
        </Grid2>
      </Container>
    </>
  );
}
