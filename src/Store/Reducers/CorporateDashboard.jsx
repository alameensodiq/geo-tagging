import { createSlice } from "@reduxjs/toolkit";
import { CorporateDashboard } from "../Apis/CorporateDashboard";

export const CorporateDashboardSlice = createSlice({
  name: "corporatedashboard",
  initialState: {
    corporatedashboard: null,
    authenticatingcorporatedashboard: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.corporatedashboard = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcorporatedashboard = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateDashboard.fulfilled, (state, action) => {
      state.corporatedashboard = action.payload;
      state.authenticated = false;
      state.authenticatingcorporatedashboard = false;
      return state;
    });
    builder.addCase(CorporateDashboard.pending, (state, action) => {
      state.authenticatingcorporatedashboard = true;
      state.authenticated = true;
    });
    builder.addCase(CorporateDashboard.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcorporatedashboard = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CorporateDashboardSlice.actions;

export const CorporateDashboardSelector = (state) => state.corporatedashboard;
