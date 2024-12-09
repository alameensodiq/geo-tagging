import { createSlice } from "@reduxjs/toolkit";
import { RenewSub } from "../Apis/RenewSub";

export const RenewSubSlice = createSlice({
  name: "renewsub",
  initialState: {
    renewsub: null,
    authenticatingrenewsub: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.renewsub = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingrenewsub = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(RenewSub.fulfilled, (state, action) => {
      state.renewsub = action.payload;
      state.authenticated = false;
      state.authenticatingrenewsub = false;
      return state;
    });
    builder.addCase(RenewSub.pending, (state, action) => {
      state.authenticatingrenewsub = true;
      state.authenticated = true;
    });
    builder.addCase(RenewSub.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingrenewsub = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = RenewSubSlice.actions;

export const RenewSubSelector = (state) => state.renewsub;
