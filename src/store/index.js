import formSlice from './form-slice';
import toastListSlice from './toastList-slice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: { form: formSlice.reducer, toastList: toastListSlice.reducer },
});

export default store;
