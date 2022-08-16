import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie, removeCookie, setCookie } from 'shared/cookies';
import axios from 'axios';
import { BASE_URL } from 'shared/api';

const initialState = {
  username: '',
  isLogin: false,
  isLoading: false,
  error: '',
};

export const __postUser = createAsyncThunk(
  'postUser',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, payload);
      setCookie('mycookie', `BEARER ${response.data.mytoken}`);
      setCookie('myname', `${response.data.username}`);
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    getUser: (state, action) =>
      (action.payload = {
        username: getCookie('myname'),
        isLogin: getCookie('mycookie') ? true : false,
      }),
    deleteUser: (state, action) => {
      removeCookie('mycookie');
      removeCookie('myname');
      return (action.payload = { username: '', isLogin: false });
    },
  },
  extraReducers: {
    [__postUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__postUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.username = getCookie('myname');
      state.isLogin = getCookie('mycookie') ? true : false;
    },
    [__postUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log('POST USER ERROR', payload.response.data.error);
      state.error = payload.response.data.error;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
