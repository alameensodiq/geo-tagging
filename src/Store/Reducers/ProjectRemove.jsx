import { createSlice } from "@reduxjs/toolkit";
import { ProjectRemove } from "../Apis/ProjectRemove";

export const ProjectRemoveSlice = createSlice({
  name: "removerepproject",
  initialState: {
    removerepproject: null,
    authenticatingremoverepproject: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.removerepproject = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingremoverepproject = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ProjectRemove.fulfilled, (state, action) => {
      state.removerepproject = action.payload;
      state.authenticated = false;
      state.authenticatingremoverepproject = false;
      return state;
    });
    builder.addCase(ProjectRemove.pending, (state, action) => {
      state.authenticatingremoverepproject = true;
      state.authenticated = true;
    });
    builder.addCase(ProjectRemove.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingremoverepproject = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ProjectRemoveSlice.actions;

export const ProjectRemoveSelector = (state) => state.removerepproject;
