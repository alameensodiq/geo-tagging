import { createSlice } from "@reduxjs/toolkit";
import { Dashboard } from "../Apis/Dashboard";

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    dashboard: null,
    authenticatingdashboard: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.dashboard = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdashboard = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Dashboard.fulfilled, (state, action) => {
      state.dashboard = action.payload;
      state.authenticated = false;
      state.authenticatingdashboard = false;
      return state;
    });
    builder.addCase(Dashboard.pending, (state, action) => {
      state.authenticatingdashboard = true;
      state.authenticated = true;
    });
    builder.addCase(Dashboard.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdashboard = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DashboardSlice.actions;

export const DashboardSelector = (state) => state.dashboard;
