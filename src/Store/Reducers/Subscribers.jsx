import { createSlice } from "@reduxjs/toolkit";
import { Subscribers } from "../Apis/Subscribers";

export const SubscribersSlice = createSlice({
  name: "subscribers",
  initialState: {
    subscribers: null,
    authenticatingsubscribers: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.subscribers = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsubscribers = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Subscribers.fulfilled, (state, action) => {
      state.subscribers = action.payload;
      state.authenticated = false;
      state.authenticatingsubscribers = false;
      return state;
    });
    builder.addCase(Subscribers.pending, (state, action) => {
      state.authenticatingsubscribers = true;
      state.authenticated = true;
    });
    builder.addCase(Subscribers.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingsubscribers = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = SubscribersSlice.actions;

export const SubscribersSelector = (state) => state.subscribers;
