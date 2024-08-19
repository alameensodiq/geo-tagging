import { createSlice } from "@reduxjs/toolkit";
import { ProjectStatus } from "../Apis/ProjectStatus";

export const ProjectStatusSlice = createSlice({
  name: "projectstatus",
  initialState: {
    projectstatus: null,
    authenticatingprojectstatus: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.projectstatus = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingprojectstatus = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ProjectStatus.fulfilled, (state, action) => {
      state.projectstatus = action.payload;
      state.authenticated = false;
      state.authenticatingprojectstatus = false;
      return state;
    });
    builder.addCase(ProjectStatus.pending, (state, action) => {
      state.authenticatingprojectstatus = true;
      state.authenticated = true;
    });
    builder.addCase(ProjectStatus.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingprojectstatus = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ProjectStatusSlice.actions;

export const ProjectStatusSelector = (state) => state.projectstatus;
