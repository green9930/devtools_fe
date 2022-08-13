import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

export const __postUser = createAsyncThunk(
  'postUser',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post('', payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getUser = createAsyncThunk(
  'getUser',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('');
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__postUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('POST USER', action);
    },
    [__postUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('GET USER', action);
    },
    [__getUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default userSlice;
