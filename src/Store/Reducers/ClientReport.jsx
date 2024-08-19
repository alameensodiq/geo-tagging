import { createSlice } from "@reduxjs/toolkit";
import { ClientReport } from "../Apis/ClientReport";

export const ClientReportSlice = createSlice({
  name: "clientreport",
  initialState: {
    clientreport: null,
    authenticatingclientreport: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.clientreport = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingclientreport = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ClientReport.fulfilled, (state, action) => {
      state.clientreport = action.payload;
      state.authenticated = false;
      state.authenticatingclientreport = false;
      return state;
    });
    builder.addCase(ClientReport.pending, (state, action) => {
      state.authenticatingclientreport = true;
      state.authenticated = true;
    });
    builder.addCase(ClientReport.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingclientreport = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ClientReportSlice.actions;

export const ClientReportSelector = (state) => state.clientreport;
