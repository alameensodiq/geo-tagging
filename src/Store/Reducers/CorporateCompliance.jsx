import { createSlice } from '@reduxjs/toolkit';
import { CorporateCompliance } from '../Apis/CorporateCompliance';

export const CorporateComplianceSlice = createSlice({
  name: 'corporatecompliance',
  initialState: {
    corporatecompliance: null,
    authenticatingcorporatecompliance: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.corporatecompliance = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcorporatecompliance= false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateCompliance.fulfilled, (state, action) => {
      state.corporatecompliance = action.payload;
      state.authenticated = false;
      state.authenticatingcorporatecompliance = false;
      return state;
    });
    builder.addCase(CorporateCompliance.pending, (state, action) => {
        state.authenticatingcorporatecompliance = true;
        state.authenticated = true;
    });
    builder.addCase(CorporateCompliance.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingcorporatecompliance = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CorporateComplianceSlice.actions;

export const CorporatePunctualSelector = (state) => state.corporatecompliance;
