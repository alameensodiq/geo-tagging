import { createSlice } from "@reduxjs/toolkit";
import { AddSub } from "../Apis/AddSub";

export const AddSubSlice = createSlice({
  name: "addsub",
  initialState: {
    addsub: null,
    authenticatingaddsub: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.addteam = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaddsub = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AddSub.fulfilled, (state, action) => {
      state.addsub = action.payload;
      state.authenticated = false;
      state.authenticatingaddsub = false;
      return state;
    });
    builder.addCase(AddSub.pending, (state, action) => {
      state.authenticatingaddsub = true;
      state.authenticated = true;
    });
    builder.addCase(AddSub.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaddsub = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AddSubSlice.actions;

export const AddSubSelector = (state) => state.addsub;
