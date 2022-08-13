import { configureStore } from '@reduxjs/toolkit';
import commentsSlice from 'redux/modules/commentsSlice';
import userSlice from 'redux/modules/userSlice';
import devToolsSlice from 'redux/modules/devToolsSlice';

const store = configureStore({
  reducer: {
    comments: commentsSlice.reducer,
    devTools: devToolsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
