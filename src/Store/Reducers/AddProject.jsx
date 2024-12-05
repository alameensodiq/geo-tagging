import { createSlice } from "@reduxjs/toolkit";
import { AddProject } from "../Apis/AddProject";

export const AddProjectSlice = createSlice({
  name: "addproject",
  initialState: {
    addproject: null,
    authenticatingaddproject: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.addproject = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaddproject = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AddProject.fulfilled, (state, action) => {
      state.addproject = action.payload;
      state.authenticated = false;
      state.authenticatingaddproject = false;
      return state;
    });
    builder.addCase(AddProject.pending, (state, action) => {
      state.authenticatingaddproject = true;
      state.authenticated = true;
    });
    builder.addCase(AddProject.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaddproject = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AddProjectSlice.actions;

export const AddProjectSelector = (state) => state.addproject;
