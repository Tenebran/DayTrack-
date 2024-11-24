import { ResponseType } from 'api/type';
import { AppDispatchType } from 'redux/store';
import { appActions } from '../state/app-reducer';

export const handlerServerAppError = <D>(dispatch: AppDispatchType, data: ResponseType<D>) => {
  if (data.messages.length) {
    dispatch(appActions.setAppError({ error: data.messages[0] }));
  } else {
    dispatch(appActions.setAppError({ error: 'Some Error' }));
  }
  dispatch(appActions.setAppStatus({ status: 'failed' }));
};
