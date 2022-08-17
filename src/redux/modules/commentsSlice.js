import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from 'shared/api';
import { getCookie } from 'shared/cookies';

const initialState = {
  comments: [],
  comment: {},
  isLoading: false,
  error: null,
};

export const __postComments = createAsyncThunk(
  'postComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/api/articles/${payload.articlesId}/comments`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getCookie('mycookie')}`,
        },
        data: { comment: payload.comments },
      });

      console.log(response);
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
    [__postComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log('POST COMMENTS', payload);
      state.comments = payload;
    },
    [__postComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default commentsSlice;
