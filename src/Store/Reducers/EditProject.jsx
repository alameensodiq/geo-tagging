import { createSlice } from "@reduxjs/toolkit";
import { EditProject } from "../Apis/EditProject";

export const EditProjectSlice = createSlice({
  name: "editproject",
  initialState: {
    editproject: null,
    authenticatingeditproject: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.editproject = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingeditproject = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditProject.fulfilled, (state, action) => {
      state.editproject = action.payload;
      state.authenticated = false;
      state.authenticatingeditproject = false;
      return state;
    });
    builder.addCase(EditProject.pending, (state, action) => {
      state.authenticatingeditproject = true;
      state.authenticated = true;
    });
    builder.addCase(EditProject.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingeditproject = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditProjectSlice.actions;

export const EditProjectSelector = (state) => state.editproject;
