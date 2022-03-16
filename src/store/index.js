import formSlice from './form-slice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: { form: formSlice.reducer },
});

export default store;
