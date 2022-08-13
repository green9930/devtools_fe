import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __postComments = createAsyncThunk(
  'postComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post('', payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComments = createAsyncThunk(
  'getComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('');
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__postComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('POST COMMENTS', action);
    },
    [__postComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('GET COMMENTS', action);
    },
    [__getComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default commentsSlice;
