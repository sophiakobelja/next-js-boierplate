// define root store here
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { reducers } from './slices';

// store
export const store = configureStore({
  reducer: {
    // add slices here
    ...reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// state type
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

// dispatch type as hook
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// uncomment to dispatch initialization functions
// const initApp = async () => {
// }

// initApp()
