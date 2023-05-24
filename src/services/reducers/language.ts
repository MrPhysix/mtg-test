import { createSlice } from '@reduxjs/toolkit';

export type TLanguage = {
  language: string,
}

const initialState: TLanguage = {
  language: 'ru',
};

const modalSlice = createSlice({
  name: 'languageReducer',
  initialState,
  reducers: {
    switchLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const {
  switchLanguage,
} = modalSlice.actions;

export default modalSlice.reducer;
