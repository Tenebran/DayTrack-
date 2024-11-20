import { authAPI } from 'api/todolist-api';
import { setIsInitializedAC, setStatusAC } from 'state/app-reducer';
import { handlerServerAppError, handleServerNetworkError } from '../utils/error-utils';
import { LoginData } from './Login';
import { clearTodosDataAC } from 'state/todolists-reducer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'redux/store';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const loginTC =
  (data: LoginData): AppThunk =>
  async (dispatch) => {
    dispatch(setStatusAC('loading'));

    try {
      const res = await authAPI.login(data);
      res.data.data.userId;
      if (res.data.resultCode === 0) {
        dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }));
        dispatch(setStatusAC('succeeded'));
      } else {
        handlerServerAppError(dispatch, res.data);
        dispatch(setStatusAC('failed'));
      }
    } catch (error) {
      handleServerNetworkError(error as { message: string }, dispatch);
      dispatch(setStatusAC('failed'));
    }
  };

export const meTC = (): AppThunk => async (dispatch) => {
  dispatch(setStatusAC('loading'));

  try {
    const res = await authAPI.me();
    res.data.data.userId;
    if (res.data.resultCode === 0) {
      dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }));
      dispatch(setStatusAC('succeeded'));
    } else {
      handlerServerAppError(dispatch, res.data);
      dispatch(setStatusAC('failed'));
    }
  } catch (error) {
    handleServerNetworkError(error as { message: string }, dispatch);
    dispatch(setStatusAC('failed'));
  } finally {
    dispatch(setIsInitializedAC(true));
  }
};

export const logOutTC = (): AppThunk => async (dispatch) => {
  dispatch(setStatusAC('loading'));

  try {
    const res = await authAPI.logOut();
    if (res.data.resultCode === 0) {
      dispatch(authActions.setIsLoggedIn({ isLoggedIn: false }));
      dispatch(setStatusAC('succeeded'));
      dispatch(clearTodosDataAC());
    } else {
      handlerServerAppError(dispatch, res.data);
      dispatch(setStatusAC('failed'));
    }
  } catch (error) {
    handleServerNetworkError(error as { message: string }, dispatch);
    dispatch(setStatusAC('failed'));
  }
};

export const authReducer = slice.reducer;
export const authActions = slice.actions;
