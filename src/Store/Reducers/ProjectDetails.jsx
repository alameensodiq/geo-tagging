import { createSlice } from "@reduxjs/toolkit";
import { ProjectDetails } from "../Apis/ProjectDetails";

export const ProjectDetailsSlice = createSlice({
  name: "projectdetails",
  initialState: {
    projectdetails: null,
    authenticatingprojectdetails: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.projectdetails = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingprojectdetails = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ProjectDetails.fulfilled, (state, action) => {
      state.projectdetails = action.payload;
      state.authenticated = false;
      state.authenticatingprojectdetails = false;
      return state;
    });
    builder.addCase(ProjectDetails.pending, (state, action) => {
      state.authenticatingprojectdetails = true;
      state.authenticated = true;
    });
    builder.addCase(ProjectDetails.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingprojectdetails = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ProjectDetailsSlice.actions;

export const ProjectDetailsSelector = (state) => state.projectdetails;
