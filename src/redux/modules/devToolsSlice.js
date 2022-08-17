import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "shared/api";
import { getCookie } from "shared/cookies";

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
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/api/articles`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
        data: payload,
      });
      console.log("POST LIST", response);
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
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/articles`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
      });
      console.log("GET LIST", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateDevTools = createAsyncThunk(
  "updateDevTools",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "patch",
        url: `${BASE_URL}/api/articles/${payload.id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
        data: { content: payload.content },
      });
      console.log("PATCH LIST", response);
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
      const response = await axios({
        method: "delete",
        url: `${BASE_URL}/api/articles/${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
      });
      console.log("DELETE LIST", response);
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
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/articles/${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getCookie("mycookie")}`,
        },
      });
      console.log("GET DETAIL", response);
      return thunkAPI.fulfillWithValue(response.data);
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
      console.log("GET DEVTOOLS", action.payload);
      state.devtools = action.payload;
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
      console.log("UPDATE DEVTOOLS", payload);
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
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("GET DEVTOOL DETAIL", action.payload);
      state.devtool = action.payload;
    },
    [__getDetail.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default devToolsSlice;
