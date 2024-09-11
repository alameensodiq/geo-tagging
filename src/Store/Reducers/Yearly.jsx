import { createSlice } from '@reduxjs/toolkit';
import { YearlyComp } from '../Apis/YearlyComp';

export const YearlyCompSlice = createSlice({
  name: 'yearly',
  initialState: {
    yearly: null,
    authenticatingyearly: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.yearly = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingyearly= false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(YearlyComp.fulfilled, (state, action) => {
      state.yearly = action.payload;
      state.authenticated = false;
      state.authenticatingyearly = false;
      return state;
    });
    builder.addCase(YearlyComp.pending, (state, action) => {
        state.authenticatingyearly = true;
        state.authenticated = true;
    });
    builder.addCase(YearlyComp.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingyearly = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = YearlyCompSlice.actions;

export const YearlySelector = (state) => state.yearly;
