import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import languageReducer from './reducers/language';

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
