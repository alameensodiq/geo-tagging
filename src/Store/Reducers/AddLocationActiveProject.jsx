import { createSlice } from "@reduxjs/toolkit";
import { AddLocationActiveProject } from "../Apis/AddLocationActiveProject";

export const AddLocationActiveProjectSlice = createSlice({
  name: "addlocationactiveproject",
  initialState: {
    addlocationactiveproject: null,
    authenticatingaddlocationactiveproject: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.addlocationactiveproject = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaddlocationactiveproject = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AddLocationActiveProject.fulfilled, (state, action) => {
      state.addlocationactiveproject = action.payload;
      state.authenticated = false;
      state.authenticatingaddlocationactiveproject = false;
      return state;
    });
    builder.addCase(AddLocationActiveProject.pending, (state, action) => {
      state.authenticatingaddlocationactiveproject = true;
      state.authenticated = true;
    });
    builder.addCase(AddLocationActiveProject.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaddlocationactiveproject = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AddLocationActiveProjectSlice.actions;

export const AddLocationActiveProjectSelector = (state) =>
  state.addlocationactiveproject;
