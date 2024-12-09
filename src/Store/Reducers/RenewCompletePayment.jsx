import { createSlice } from "@reduxjs/toolkit";
import { RenewCompletePayment } from "../Apis/RenewCompletePayment";

export const RenewCompletePaymentSlice = createSlice({
  name: "renewcompletepayment",
  initialState: {
    renewcompletepayment: null,
    authenticatingrenewcompletepayment: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.renewcompletepayment = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingrenewcompletepayment = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(RenewCompletePayment.fulfilled, (state, action) => {
      state.renewcompletepayment = action.payload;
      state.authenticated = false;
      state.authenticatingrenewcompletepayment = false;
      return state;
    });
    builder.addCase(RenewCompletePayment.pending, (state, action) => {
      state.authenticatingrenewcompletepayment = true;
      state.authenticated = true;
    });
    builder.addCase(RenewCompletePayment.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingrenewcompletepayment = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = RenewCompletePaymentSlice.actions;

export const RenewCompletePaymentSelector = (state) =>
  state.renewcompletepayment;
