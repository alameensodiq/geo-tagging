import { createSlice } from "@reduxjs/toolkit";
import { ClientWelfare } from "../Apis/ClientWelfare";

export const ClientWelfareSlice = createSlice({
  name: "clientwelfare",
  initialState: {
    clientwelfare: null,
    authenticatingclientwelfare: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearStateclientwelfare: (state) => {
      state.clientwelfare = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingclientwelfare = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ClientWelfare.fulfilled, (state, action) => {
      state.clientwelfare = action.payload;
      state.authenticated = false;
      state.authenticatingclientwelfare = false;
      return state;
    });
    builder.addCase(ClientWelfare.pending, (state, action) => {
      state.authenticatingclientwelfare = true;
      state.authenticated = true;
    });
    builder.addCase(ClientWelfare.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingclientwelfare = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearStateclientwelfare } = ClientWelfareSlice.actions;

export const ClientWelfareSelector = (state) => state.clientwelfare;
