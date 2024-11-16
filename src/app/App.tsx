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

export type TodolistFilterValue = 'all' | 'active' | 'completed';

export type TodolistFilterType = {
  id: string;
  filter: TodolistFilterValue;
};

const StyledGridInput = styled(Grid2)({
  margin: '10px 0',
});
const StyledPaper = styled(Paper)({
  padding: '15px',
});

export function App() {
  const [todolistFilter, setTodolistFilter] = useState<TodolistFilterType[]>(() => {
    const storedFilter = localStorage.getItem('taskFilter');
    return storedFilter ? JSON.parse(storedFilter) : [];
  });

  const todoLists = useAppSelector<TodoListsApiType[]>((state) => state.todolists);
  const status = useAppSelector<RequestStatusType>((state) => state.app.status);

  const dispatch = useAppDispatch();

  const addTodoList = (title: string) => {
    dispatch(addTodolistTC(title));
  };

  useEffect(() => {
    dispatch(setTodolistsTC());
  }, []);

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
        <Grid2 container spacing={4}>
          {todoLists.map((t) => {
            const currentFilter =
              todolistFilter.find((filter) => filter.id === t.id)?.filter || 'all';
            console.log(currentFilter);
            return (
              <StyledPaper elevation={3} variant="outlined" key={t.id}>
                <TodoList
                  todoLists={t}
                  currentFilter={currentFilter}
                  updateTodolistFilter={updateTodolistFilter}
                />
              </StyledPaper>
            );
          })}
        </Grid2>
      </Container>
    </>
  );
}
