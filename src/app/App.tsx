import React, { useEffect } from 'react';
import './App.scss';
import { TodoList } from '../common/pages/Todolist/TodoList';
import {
  AppBar,
  Button,
  CircularProgress,
  Container,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

import { ErrorSnackbar } from 'common/components/ErrorSnackbar';
import { Login } from '../features/auth/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { logOutTC, meTC } from 'features/auth/auth-reducer';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { useAppDispatch } from 'common/hooks/useAppDispatch';

export function App() {
  const status = useAppSelector((state) => state.app.status);
  const isInitialized = useAppSelector((state) => state.app.isInitialized);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const logOut = () => {
    dispatch(logOutTC());
  };

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
          {isLoggedIn && (
            <Button color="inherit" onClick={logOut}>
              Log out
            </Button>
          )}
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
