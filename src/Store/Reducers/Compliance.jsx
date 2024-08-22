import { createSlice } from "@reduxjs/toolkit";
import { Complaince } from "../Apis/Complaince";

export const ComplianceSlice = createSlice({
  name: "compliance",
  initialState: {
    compliance: null,
    authenticatingcompliance: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.compliance = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcompliance = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Complaince.fulfilled, (state, action) => {
      state.compliance = action.payload;
      state.authenticated = false;
      state.authenticatingcompliance = false;
      return state;
    });
    builder.addCase(Complaince.pending, (state, action) => {
      state.authenticatingcompliance = true;
      state.authenticated = true;
    });
    builder.addCase(Complaince.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcompliance = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ComplianceSlice.actions;

export const ComplianceSelector = (state) => state.compliance;
