import { createSlice } from "@reduxjs/toolkit";
import { Remarks } from "../Apis/Remarks";

export const RemarksSlice = createSlice({
  name: "remarks",
  initialState: {
    remarks: null,
    authenticatingremarks: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.remarks = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingremarks = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Remarks.fulfilled, (state, action) => {
      state.remarks = action.payload;
      state.authenticated = false;
      state.authenticatingremarks = false;
      return state;
    });
    builder.addCase(Remarks.pending, (state, action) => {
      state.authenticatingremarks = true;
      state.authenticated = true;
    });
    builder.addCase(Remarks.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingremarks = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = RemarksSlice.actions;

export const RemarksSelector = (state) => state.remarks;
