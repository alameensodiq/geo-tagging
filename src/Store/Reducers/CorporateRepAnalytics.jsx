import { createSlice } from "@reduxjs/toolkit";
import { CorporateRepAnalytics } from "../Apis/CorporateRepAnalytics";

export const CorporateRepAnalyticsSlice = createSlice({
  name: "corporaterepanalytics",
  initialState: {
    corporaterepanalytics: null,
    authenticatingcorporaterepanalytics: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearStatecorporaterepanalytics: (state) => {
      state.corporaterepanalytics = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcorporaterepanalytics = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateRepAnalytics.fulfilled, (state, action) => {
      state.corporaterepanalytics = action.payload;
      state.authenticated = false;
      state.authenticatingcorporaterepanalytics = false;
      return state;
    });
    builder.addCase(CorporateRepAnalytics.pending, (state, action) => {
      state.authenticatingcorporaterepanalytics = true;
      state.authenticated = true;
    });
    builder.addCase(CorporateRepAnalytics.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcorporaterepanalytics = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CorporateRepAnalyticsSlice.actions;

export const CorporateRepAnalyticsSelector = (state) =>
  state.corporaterepanalytics;
