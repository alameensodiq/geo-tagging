import { createSlice } from "@reduxjs/toolkit";
import { Payment } from "../Apis/Payment";

export const PaymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment: null,
    authenticatingpayment: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.payment = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingpayment = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Payment.fulfilled, (state, action) => {
      state.payment = action.payload;
      state.authenticated = false;
      state.authenticatingpayment = false;
      return state;
    });
    builder.addCase(Payment.pending, (state, action) => {
      state.authenticatingpayment = true;
      state.authenticated = true;
    });
    builder.addCase(Payment.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingpayment = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = PaymentSlice.actions;

export const PaymentSelector = (state) => state.payment;
