import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { AppDispatchType, AppRootStateType } from 'redux/store';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  Action
>;

export const useAppDispatch: () => AppDispatchType = useDispatch;
