import React, { useState } from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from './redux/store';
import { appActions } from 'state/app-reducer';

export const ErrorSnackbar = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector<null | string>((state) => state.app.error);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(appActions.setAppError({ error: null }));
  };

  return (
    <Snackbar
      open={!!error}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
        {error && error}
      </Alert>
    </Snackbar>
  );
};
