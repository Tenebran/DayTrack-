import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppRootStateType } from 'redux/store';

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
