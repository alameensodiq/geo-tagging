import { createSlice } from "@reduxjs/toolkit";
import { DemoApi } from "../Apis/DemoApi";

export const DemoApiSlice = createSlice({
  name: "demoapi",
  initialState: {
    demoapi: null,
    authenticatingdemoapi: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.demoapi = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdemoapi = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DemoApi.fulfilled, (state, action) => {
      state.demoapi = action.payload;
      state.authenticated = false;
      state.authenticatingdemoapi = false;
      return state;
    });
    builder.addCase(DemoApi.pending, (state, action) => {
      state.authenticatingdemoapi = true;
      state.authenticated = true;
    });
    builder.addCase(DemoApi.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdemoapi = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DemoApiSlice.actions;

export const DemoApiSelector = (state) => state.demoapi;
