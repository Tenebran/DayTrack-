import { handlerServerAppError } from '../../common/utils/handlerServerAppError';
import { LoginData } from '../../common/pages/Login';
import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { appActions } from '../../app/app-reducer';
import { clearAllData } from '../../redux/commonActions';
import { handleServerNetworkError } from '../../common/utils/handleServerNetworkError';
import { authAPI } from '../../features/auth/authApi';
import { AppDispatchType } from '../../app/store';

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

  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        authThunks.initialized.fulfilled,
        authThunks.logOut.fulfilled,
        authThunks.login.fulfilled
      ),

      (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
      }
    );
  },
});

const login = createAsyncThunk<{ isLoggedIn: boolean }, LoginData>(
  'auth/login',
  async (arg, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    dispatch(appActions.setAppStatus({ status: 'loading' }));

    try {
      const res = await authAPI.login(arg);
      res.data.data.userId;
      if (res.data.resultCode === 0) {
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        return { isLoggedIn: true };
      } else {
        handlerServerAppError(dispatch as AppDispatchType, res.data);
        dispatch(appActions.setAppStatus({ status: 'failed' }));
        return rejectWithValue(null);
      }
    } catch (error) {
      handleServerNetworkError(error as { message: string }, dispatch as AppDispatchType);
      dispatch(appActions.setAppStatus({ status: 'failed' }));
      return rejectWithValue(null);
    }
  }
);

export const initialized = createAsyncThunk<{ isLoggedIn: boolean }, undefined>(
  'auth/initialized',
  async (_, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;

    try {
      const res = await authAPI.me();
      res.data.data.userId;
      if (res.data.resultCode === 0) {
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        return { isLoggedIn: true };
      } else {
        // handlerServerAppError(dispatch as AppDispatchType, res.data);
        return rejectWithValue(null);
      }
    } catch (error) {
      handleServerNetworkError(error as { message: string }, dispatch as AppDispatchType);
      dispatch(appActions.setAppStatus({ status: 'failed' }));
      return rejectWithValue(null);
    } finally {
      dispatch(appActions.setIsInitialized({ isInitialized: true }));
    }
  }
);

export const logOut = createAsyncThunk<{ isLoggedIn: boolean }, undefined>(
  'auth/logout',
  async (_, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    dispatch(appActions.setAppStatus({ status: 'loading' }));

    try {
      const res = await authAPI.logOut();
      if (res.data.resultCode === 0) {
        dispatch(appActions.setAppStatus({ status: 'succeeded' }));
        dispatch(clearAllData());
        return { isLoggedIn: false };
      } else {
        handlerServerAppError(dispatch as AppDispatchType, res.data);
        dispatch(appActions.setAppStatus({ status: 'failed' }));
        return rejectWithValue(null);
      }
    } catch (error) {
      handleServerNetworkError(error as { message: string }, dispatch as AppDispatchType);
      dispatch(appActions.setAppStatus({ status: 'failed' }));
      return rejectWithValue(null);
    }
  }
);

export const authReducer = slice.reducer;
export const authThunks = { login, logOut, initialized };
