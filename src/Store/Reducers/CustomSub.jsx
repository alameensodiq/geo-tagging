import { createSlice } from "@reduxjs/toolkit";
import { CustomSub } from "../Apis/CustomSub";

export const CustomSubSlice = createSlice({
  name: "customsub",
  initialState: {
    customsub: null,
    authenticatingcustomsub: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.customsub = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcustomsub = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CustomSub.fulfilled, (state, action) => {
      state.customsub = action.payload;
      state.authenticated = false;
      state.authenticatingcustomsub = false;
      return state;
    });
    builder.addCase(CustomSub.pending, (state, action) => {
      state.authenticatingcustomsub = true;
      state.authenticated = true;
    });
    builder.addCase(CustomSub.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcustomsub = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CustomSubSlice.actions;

export const CustomSubSelector = (state) => state.customsub;
