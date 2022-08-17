import { configureStore } from '@reduxjs/toolkit';
import userSlice from 'redux/modules/userSlice';
import devToolsSlice from 'redux/modules/devToolsSlice';

const store = configureStore({
  reducer: {
    devTools: devToolsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
