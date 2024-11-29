import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

const slice = createSlice({
  name: "app",
  initialState: {
    isInitialized: false,
    status: "idle" as RequestStatusType,
    error: null as null | string,
  },
  reducers: {
    setAppStatus: (
      state,
      action: PayloadAction<{ status: RequestStatusType }>,
    ) => {
      state.status = action.payload.status;
    },
    setAppError: (state, action: PayloadAction<{ error: null | string }>) => {
      state.error = action.payload.error;
    },
    setIsInitialized: (
      state,
      action: PayloadAction<{ isInitialized: boolean }>,
    ) => {
      state.isInitialized = action.payload.isInitialized;
    },
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;

export type InitialStateType = ReturnType<typeof slice.getInitialState>;
