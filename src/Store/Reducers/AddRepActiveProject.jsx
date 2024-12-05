import { createSlice } from "@reduxjs/toolkit";
import { AddRepActiveProject } from "../Apis/AddRepActiveProject";

export const AddRepActiveProjectSlice = createSlice({
  name: "addrepactiveproject",
  initialState: {
    addrepactiveproject: null,
    authenticatingaddrepactiveproject: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.addrepactiveproject = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaddrepactiveproject = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AddRepActiveProject.fulfilled, (state, action) => {
      state.addrepactiveproject = action.payload;
      state.authenticated = false;
      state.authenticatingaddrepactiveproject = false;
      return state;
    });
    builder.addCase(AddRepActiveProject.pending, (state, action) => {
      state.authenticatingaddrepactiveproject = true;
      state.authenticated = true;
    });
    builder.addCase(AddRepActiveProject.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaddrepactiveproject = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AddRepActiveProjectSlice.actions;

export const AddRepActiveProjectSelector = (state) => state.addrepactiveproject;
