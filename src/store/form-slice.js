import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    items: JSON.parse(window.localStorage.getItem('form')) || [],
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.items.push({
        id: newItem.id,
        name: newItem.name,
        address: newItem.address,
        number: newItem.number,
        memo: newItem.memo,
      });
      window.localStorage.setItem('form', JSON.stringify(state.items));
    },
    editItem(state, action) {
      const { id, memo } = action.payload;
      const findIndex = state.items.findIndex((item) => item.id === id);
      const newArr = [...state.items];
      newArr[findIndex].memo = memo;
      window.localStorage.setItem('form', JSON.stringify(state.items));
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      window.localStorage.setItem('form', JSON.stringify(state.items));
      if (window.localStorage.getItem('form') === '[]') {
        window.localStorage.removeItem('form');
      }
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice;
