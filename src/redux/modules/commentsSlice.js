import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __createComments = createAsyncThunk(
  'createComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post('', payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __readComments = createAsyncThunk(
  'readComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('');
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateComments = createAsyncThunk(
  'updateComments',
  async (payload, thunkAPI) => {
    try {
      await axios.patch(``, {
        comment: payload.comment,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComments = createAsyncThunk(
  'deleteComments',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(``);
      return thunkAPI.fulfillWithValue(payload);
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
    [__createComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__createComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('POST COMMENTS', action);
    },
    [__createComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__readComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__readComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('GET COMMENTS', action);
    },
    [__readComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__updateComments.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [__updateComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log('UPDATE COMMENTS', payload);
    },
    [__updateComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__deleteComments.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [__deleteComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log('DELETE COMMENTS', payload);
    },
    [__deleteComments.rejected]: () => {},
  },
});

export default commentsSlice;
