import { ResponseType } from "api/type";
import { appActions } from "../../app/app-reducer";
import { AppDispatchType } from "app/store";

/**
 * Handles server-side application errors by updating the application state.
 *
 * This function is designed to process errors returned from server API responses.
 * It dispatches actions to set an error message and update the application status.
 *
 * @template D - The type of the data payload in the server response.
 * @param {AppDispatchType} dispatch - The dispatch function to update the application state.
 * @param {ResponseType<D>} data - The server response containing error messages and status.
 * @param {boolean} [showError=true] - A flag indicating whether to show the error message to the user.
 * @returns {void} - This function does not return a value.
 */

export const handlerServerAppError = <D>(
  dispatch: AppDispatchType,
  data: ResponseType<D>,
  showError: boolean = true,
) => {
  if (showError) {
    dispatch(
      appActions.setAppError({
        error: data.messages.length ? data.messages[0] : "Some Error",
      }),
    );
  }
  dispatch(appActions.setAppStatus({ status: "failed" }));
};
