import React, { useEffect } from 'react';
import './App.scss';
import { TodoList } from '../common/pages/Todolist/TodoList';
import { CircularProgress, Container, LinearProgress } from '@mui/material';
import { Toolbar } from 'common/components/Toolbar';
import { ErrorSnackbar } from 'common/components/ErrorSnackbar';
import { Login } from '../common/pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authThunks } from 'features/auth/auth-reducer';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { useAppDispatch } from 'common/hooks/useAppDispatch';

export function App() {
  const status = useAppSelector((state) => state.app.status);
  const isInitialized = useAppSelector((state) => state.app.isInitialized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authThunks.initialized());
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
      {status === 'loading' && <LinearProgress />}
      <Toolbar />
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
