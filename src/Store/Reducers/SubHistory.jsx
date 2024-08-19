import { createSlice } from "@reduxjs/toolkit";
import { SubHistory } from "../Apis/SubHistory";

export const SubHistorySlice = createSlice({
  name: "subhistory",
  initialState: {
    subhistory: null,
    authenticatingsubhistory: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.subhistory = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsubhistory = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(SubHistory.fulfilled, (state, action) => {
      state.subhistory = action.payload;
      state.authenticated = false;
      state.authenticatingsubhistory = false;
      return state;
    });
    builder.addCase(SubHistory.pending, (state, action) => {
      state.authenticatingsubhistory = true;
      state.authenticated = true;
    });
    builder.addCase(SubHistory.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingsubhistory = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = SubHistorySlice.actions;

export const SubHistorySelector = (state) => state.subhistory;
