import { ResponseType } from 'api/type';
import { AppDispatchType } from 'redux/store';
import { appActions } from '../state/app-reducer';
import axios from 'axios';

export const handleServerNetworkError = (error: unknown, dispatch: AppDispatchType) => {
  let errorMessage = 'Some error occurred';

  if (axios.isAxiosError(error)) {
    errorMessage = error.response?.data?.message || error?.message || errorMessage;
  } else if (error instanceof Error) {
    errorMessage = `Native error: ${error.message}`;
  } else {
    errorMessage = JSON.stringify(error);
  }

  dispatch(appActions.setAppError({ error: errorMessage }));
  dispatch(appActions.setAppStatus({ status: 'failed' }));
};

export const handlerServerAppError = <D>(dispatch: AppDispatchType, data: ResponseType<D>) => {
  if (data.messages.length) {
    dispatch(appActions.setAppError({ error: data.messages[0] }));
  } else {
    dispatch(appActions.setAppError({ error: 'Some Error' }));
  }
  dispatch(appActions.setAppStatus({ status: 'failed' }));
};
