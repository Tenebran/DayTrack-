import { ResponseType } from 'api/type';
import { Dispatch } from 'redux';
import { setErrorAC, SetErrorType, setStatusAC, SetStatusType } from '../state/app-reducer';

type ErrorUtilsDispatchType = Dispatch<SetStatusType | SetErrorType>;

export const handleServerNetworkError = (
  error: { message: string },
  dispatch: ErrorUtilsDispatchType
) => {
  dispatch(setErrorAC(error.message));
  dispatch(setStatusAC('idle'));
};

export const handlerServerAppError = <D>(
  dispatch: ErrorUtilsDispatchType,
  data: ResponseType<D>
) => {
  if (data.messages.length) {
    dispatch(setErrorAC(data.messages[0]));
  } else {
    dispatch(setErrorAC('Some Error'));
  }
  dispatch(setStatusAC('failed'));
};
