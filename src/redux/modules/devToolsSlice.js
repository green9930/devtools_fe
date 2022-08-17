import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from 'shared/api';
import { getCookie } from 'shared/cookies';

const initialState = {
  devtools: [],
  devtool: {
    comments: [],
  },
  isLoading: false,
  error: null,
};

export const __getDevTools = createAsyncThunk(
  'getDevTools',
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: 'get',
        url: `${BASE_URL}/api/articles`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getCookie('mycookie')}`,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postDevTools = createAsyncThunk(
  'postDevTools',
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/api/articles`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getCookie('mycookie')}`,
        },
        data: payload,
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateDevTools = createAsyncThunk(
  'updateDevTools',
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: 'patch',
        url: `${BASE_URL}/api/articles/${payload.id}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getCookie('mycookie')}`,
        },
        data: { content: payload.content },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteDevTools = createAsyncThunk(
  'deleteDevTools',
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `${BASE_URL}/api/articles/${payload}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getCookie('mycookie')}`,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDetail = createAsyncThunk(
  'getDetail',
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: 'get',
        url: `${BASE_URL}/api/articles/${payload}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getCookie('mycookie')}`,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postComments = createAsyncThunk(
  'postComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/api/articles/${
          ('PAYLOAD', payload.articleId)
        }/comments`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getCookie('mycookie')}`,
        },
        data: { comment: payload.comment },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const devToolsSlice = createSlice({
  name: 'devToolsSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__getDevTools.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDevTools.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.devtools = payload;
    },
    [__getDevTools.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__postDevTools.pending]: (state) => {
      state.isLoading = true;
    },
    [__postDevTools.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__postDevTools.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__updateDevTools.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateDevTools.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.devtool = payload;
    },
    [__updateDevTools.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__deleteDevTools.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteDevTools.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.devtools = payload;
    },
    [__deleteDevTools.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.devtool = payload;
    },
    [__getDetail.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
    [__postComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.devtool.comments.unshift(payload);
    },
    [__postComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.error;
    },
  },
});

export default devToolsSlice;
