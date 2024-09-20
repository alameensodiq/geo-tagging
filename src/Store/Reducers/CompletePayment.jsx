import { createSlice } from "@reduxjs/toolkit";
import { CompletePayment } from "../Apis/CompletePayment";

export const CompletePaymentSlice = createSlice({
  name: "complete",
  initialState: {
    complete: null,
    authenticatingcomplete: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.complete = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcomplete = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CompletePayment.fulfilled, (state, action) => {
      state.complete = action.payload;
      state.authenticated = false;
      state.authenticatingcomplete = false;
      return state;
    });
    builder.addCase(CompletePayment.pending, (state, action) => {
      state.authenticatingcomplete = true;
      state.authenticated = true;
    });
    builder.addCase(CompletePayment.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcomplete = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CompletePaymentSlice.actions;

export const CompletePaymentSelector = (state) => state.complete;
