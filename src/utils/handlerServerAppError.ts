import { ResponseType } from 'api/type';
import { appActions } from '../app/app-reducer';
import { AppDispatchType } from 'redux/store';

export const handlerServerAppError = <D>(dispatch: AppDispatchType, data: ResponseType<D>) => {
  if (data.messages.length) {
    dispatch(appActions.setAppError({ error: data.messages[0] }));
  } else {
    dispatch(appActions.setAppError({ error: 'Some Error' }));
  }
  dispatch(appActions.setAppStatus({ status: 'failed' }));
};
