import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  devtools: [],
  isLoading: false,
  error: null,
};

export const __postDevTools = createAsyncThunk(
  'postDevTools',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post('', payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDevTools = createAsyncThunk(
  'getDevTools',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('');
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
      await axios.patch(``, {
        content: payload.content,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteDevTools = createAsyncThunk(
  'deleteDevTools',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(``);
      return thunkAPI.fulfillWithValue(payload);
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
    [__postDevTools.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postDevTools.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('POST DEVTOOLS', action);
    },
    [__postDevTools.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getDevTools.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDevTools.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('GET DEVTOOLS', action);
    },
    [__getDevTools.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__updateDevTools.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [__updateDevTools.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log('UPDATE DEVTOOLS', payload);
    },
    [__updateDevTools.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__deleteDevTools.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [__deleteDevTools.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log('DELETE DEVTOOLS', payload);
    },
    [__deleteDevTools.rejected]: () => {},
  },
});

export default devToolsSlice;