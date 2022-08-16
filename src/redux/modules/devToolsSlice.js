import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RESP from "mockAPI/reponse";

const initialState = {
  devtools: [],
  devtool: {},
  isLoading: false,
  error: null,
};

export const __postDevTools = createAsyncThunk(
  "postDevTools",
  async (payload, thunkAPI) => {
    try {
      console.log("payload", payload);
      const response = await axios.post(
        "http://3.34.185.48:8080/api/articles/",
        payload
      );
      // const response = await axios.post(RESP, payload); //mock API 불가
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDevTools = createAsyncThunk(
  "getDevTools",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://3.34.185.48:8080/api/articles/"); //실제서버
      // const response = RESP; // mokAPI
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDetail = createAsyncThunk(
  "getDetail",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://3.34.185.48:8080/api/articles/${payload}`
      ); // 실제서버
      // const response = await RESP.data.responseArticles[payload - 1]; // mok API

      return thunkAPI.fulfillWithValue(response.data); //mok API
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateDevTools = createAsyncThunk(
  "updateDevTools",
  async (payload, thunkAPI) => {
    try {
      console.log("__updateDevTools", payload);
      const response = await axios.patch(
        `http://3.34.185.48:8080/api/articles/${[payload.id]}`,
        payload
      );

      // const response = RESP.data.responseArticles[payload.id - 1];
      // console.log(
      //   "__updateDevTools response",
      //   RESP.data.responseArticles[payload.id - 1],
      //   "payload",
      //   payload
      // );

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteDevTools = createAsyncThunk(
  "deleteDevTools",
  async (payload, thunkAPI) => {
    try {
      console.log("__deleteDevTools", payload);
      await axios.delete(`http://3.34.185.48:8080/api/articles/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const devToolsSlice = createSlice({
  name: "devToolsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__postDevTools.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postDevTools.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("POST DEVTOOLS", action);
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
      console.log("action.payload", action.payload);
      state.devtools = action.payload;
    },
    [__getDevTools.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // __getDetail
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.devtool = action.payload;
    },
    [__getDetail.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__updateDevTools.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [__updateDevTools.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log("UPDATE DEVTOOLS payload", payload);
      // console.log(state.devtool);
      // console.log(state.devtools);
      state.devtool = payload;
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
      console.log("DELETE DEVTOOLS", payload);
      state.devtools = state.devtools.filter((item) => item.id !== payload);
    },
    [__deleteDevTools.rejected]: () => {},
  },
});

export default devToolsSlice;
