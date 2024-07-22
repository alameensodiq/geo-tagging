import { createSlice } from '@reduxjs/toolkit';
import { CorporateProject } from '../Apis/CorporateProject';

export const CorporateProjectSlice = createSlice({
  name: 'project',
  initialState: {
    project: null,
    authenticatingproject: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.project = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingproject = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateProject.fulfilled, (state, action) => {
      state.project = action.payload;
      state.authenticated = false;
      state.authenticatingproject = false;
      return state;
    });
    builder.addCase(CorporateProject.pending, (state, action) => {
        state.authenticatingproject = true;
        state.authenticated = true;
    });
    builder.addCase(CorporateProject.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingproject = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CorporateProjectSlice.actions;

export const CorporateProjectSelector = (state) => state.project;
