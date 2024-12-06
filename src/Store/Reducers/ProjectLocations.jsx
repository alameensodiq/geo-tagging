import { createSlice } from "@reduxjs/toolkit";
import { ProjectLocations } from "../Apis/ProjectLocations";

export const ProjectLocationsSlice = createSlice({
  name: "projectlocations",
  initialState: {
    projectlocations: null,
    authenticatingprojectlocations: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.projectlocations = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingprojectlocations = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ProjectLocations.fulfilled, (state, action) => {
      state.projectlocations = action.payload;
      state.authenticated = false;
      state.authenticatingprojectlocations = false;
      return state;
    });
    builder.addCase(ProjectLocations.pending, (state, action) => {
      state.authenticatingprojectlocations = true;
      state.authenticated = true;
    });
    builder.addCase(ProjectLocations.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingprojectlocations = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ProjectLocationsSlice.actions;

export const ProjectLocationsSelector = (state) => state.projectlocations;
