import React, { useEffect } from 'react';
import './App.scss';
import { TodoList } from '../TodoList';
import { AddItemForm } from '../AddItemForm';
import {
  AppBar,
  Button,
  CircularProgress,
  Container,
  Grid2,
  IconButton,
  LinearProgress,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { RequestStatusType } from '../state/app-reducer';
import { ErrorSnackbar } from 'ErrorSnackbar';
import { Login } from '../features/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { meTC } from 'features/auth-reducer';

export function App() {
  const status = useAppSelector<RequestStatusType>((state) => state.app.status);
  const isInitialized = useAppSelector((state) => state.app.isInitialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(meTC());
  }, []);

  if (!isInitialized) {
    return (
      <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
        <CircularProgress />
      </div>
    );
  }
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
      <ErrorSnackbar />
      <Container>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<h1>PAGE NOT FOUND 404 </h1>} />
          <Route path="*" element={<Navigate to={'/404'} />} />
        </Routes>
      </Container>
    </>
  );
}
