import { configureStore } from '@reduxjs/toolkit'
import toastListReducer from './toastListSlice';

export const store = configureStore({
  reducer: {
		toastList: toastListReducer,
	},
})