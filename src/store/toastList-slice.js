import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const toastListSlice = createSlice({
  name: 'toastList',
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.push(action.payload);
    },
    deleteToast: (state) => {
      state.shift();
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToast, deleteToast } = toastListSlice.actions;

export default toastListSlice;
