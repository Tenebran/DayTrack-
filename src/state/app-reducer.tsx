export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

const initialState = {
  isInitialized: false,
  error: null as null | string,
  status: 'idle' as RequestStatusType,
};

type InitialStateType = typeof initialState;

export type SetStatusType = ReturnType<typeof setStatusAC>;
export type SetErrorType = ReturnType<typeof setErrorAC>;
export type SettIsInitializedType = ReturnType<typeof setIsInitializedAC>;

type ActionsType = SetStatusType | SetErrorType | SettIsInitializedType;

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.status };
    case 'APP/SET-ERROR':
      return { ...state, error: action.error };
    case 'APP/SET-ISINITIALIZED':
      return { ...state, isInitialized: action.isInitialized };
    default:
      return state;
  }
};

export const setStatusAC = (status: RequestStatusType) =>
  ({
    type: 'APP/SET-STATUS',
    status,
  }) as const;

export const setErrorAC = (error: null | string) =>
  ({
    type: 'APP/SET-ERROR',
    error,
  }) as const;

export const setIsInitializedAC = (isInitialized: boolean) =>
  ({
    type: 'APP/SET-ISINITIALIZED',
    isInitialized,
  }) as const;
