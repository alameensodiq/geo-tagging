import { createSlice } from '@reduxjs/toolkit';
import { SubCompliance } from '../Apis/SubCompliance';

export const SubComplianceSlice = createSlice({
  name: 'subcompliance',
  initialState: {
    subcompliance: null,
    authenticatingsubcompliance: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.subcompliance = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsubcompliance = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SubCompliance.fulfilled, (state, action) => {
      state.subcompliance = action.payload;
      state.authenticated = false;
      state.authenticatingsubcompliance = false;
      return state;
    });
    builder.addCase(SubCompliance.pending, (state, action) => {
        state.authenticatingsubcompliance = true;
        state.authenticated = true;
    });
    builder.addCase(SubCompliance.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingsubcompliance = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = SubComplianceSlice.actions;

export const SubComplianceSelector = (state) => state.subcompliance;
