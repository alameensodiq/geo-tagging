import { createSlice } from "@reduxjs/toolkit";
import { CorporateProjectAnalytics } from "../Apis/CorporateProjectAnalytics";

export const CorporateProjectAnalyticsSlice = createSlice({
  name: "corporateprojectanalytics",
  initialState: {
    corporateprojectanalytics: null,
    authenticatingcorporateprojectanalytics: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearStatecorporateprojectanalytics: (state) => {
      state.corporateprojectanalytics = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcorporateprojectanalytics = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateProjectAnalytics.fulfilled, (state, action) => {
      state.corporateprojectanalytics = action.payload;
      state.authenticated = false;
      state.authenticatingcorporateprojectanalytics = false;
      return state;
    });
    builder.addCase(CorporateProjectAnalytics.pending, (state, action) => {
      state.authenticatingcorporateprojectanalytics = true;
      state.authenticated = true;
    });
    builder.addCase(CorporateProjectAnalytics.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcorporateprojectanalytics = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CorporateProjectAnalyticsSlice.actions;

export const CorporateProjectAnalyticsSelector = (state) =>
  state.corporateprojectanalytics;
