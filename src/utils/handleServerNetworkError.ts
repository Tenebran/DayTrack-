import { AppDispatchType } from 'redux/store';
import { appActions } from '../app/app-reducer';
import axios from 'axios';

/**
 * Handles network errors by dispatching error messages and updating application status.
 *
 * This function processes different types of errors, including Axios errors, native errors,
 * and unknown error objects, and updates the application state accordingly.
 *
 * @param {unknown} error - The error object caught during a network request or other operations.
 * @param {AppDispatchType} dispatch - The dispatch function to update the application state.
 * @returns {void} - This function does not return a value.
 */

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
