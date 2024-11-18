import { authAPI } from 'api/todolist-api';
import { Dispatch } from 'redux';
import {
  SetErrorType,
  setIsInitializedAC,
  setStatusAC,
  SetStatusType,
  SettIsInitializedType,
} from 'state/app-reducer';
import { handlerServerAppError, handleServerNetworkError } from 'utils/error-utils';
import { LoginData } from './Login';

const initialState = {
  isLoggedIn: false,
};
type InitialStateType = typeof initialState;

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'login/SET-IS-LOGGED-IN':
      return { ...state, isLoggedIn: action.value };
    default:
      return state;
  }
};

export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'login/SET-IS-LOGGED-IN', value }) as const;

export const loginTC = (data: LoginData) => async (dispatch: Dispatch<ActionsType>) => {
  dispatch(setStatusAC('loading'));

  try {
    const res = await authAPI.login(data);
    res.data.data.userId;
    if (res.data.resultCode === 0) {
      dispatch(setIsLoggedInAC(true));
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

export const meTC = () => async (dispatch: Dispatch<ActionsType>) => {
  dispatch(setStatusAC('loading'));

  try {
    const res = await authAPI.me();
    res.data.data.userId;
    if (res.data.resultCode === 0) {
      dispatch(setIsLoggedInAC(true));
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

type ActionsType =
  | ReturnType<typeof setIsLoggedInAC>
  | SetStatusType
  | SetErrorType
  | SettIsInitializedType;
