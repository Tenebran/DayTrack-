import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { AppRootStateType } from 'redux/store';

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, Action>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  Action
>;

export const useAppDispatch: () => AppDispatchType = useDispatch;
