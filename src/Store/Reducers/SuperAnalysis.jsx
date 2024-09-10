import { createSlice } from '@reduxjs/toolkit';
import { SubAnalysis } from '../Apis/SubAnalysis';

export const SuperAnalysisSlice = createSlice({
  name: 'superanalysis',
  initialState: {
    superanalysis: null,
    authenticatingsuperanalysis: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.superanalysis = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsuperanalysis = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SubAnalysis.fulfilled, (state, action) => {
      state.superanalysis = action.payload;
      state.authenticated = false;
      state.authenticatingsuperanalysis = false;
      return state;
    });
    builder.addCase(SubAnalysis.pending, (state, action) => {
        state.authenticatingsuperanalysis = true;
        state.authenticated = true;
    });
    builder.addCase(SubAnalysis.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingsuperanalysis = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = SuperAnalysisSlice.actions;

export const SuperAnalysisSelector = (state) => state.superanalysis;
