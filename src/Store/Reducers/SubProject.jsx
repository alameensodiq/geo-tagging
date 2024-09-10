import { createSlice } from '@reduxjs/toolkit';
import { SubProject } from '../Apis/SubProject';

export const SubProjectSlice = createSlice({
  name: 'subproject',
  initialState: {
    subproject: null,
    authenticatingsubproject: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.subproject = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsubproject = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SubProject.fulfilled, (state, action) => {
      state.subproject = action.payload;
      state.authenticated = false;
      state.authenticatingsubproject = false;
      return state;
    });
    builder.addCase(SubProject.pending, (state, action) => {
        state.authenticatingsubproject = true;
        state.authenticated = true;
    });
    builder.addCase(SubProject.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingsubproject = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = SubProjectSlice.actions;

export const SubProjectSelector = (state) => state.subproject;
