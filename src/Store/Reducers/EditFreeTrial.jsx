import { createSlice } from "@reduxjs/toolkit";
import { EditFreeTrial } from "../Apis/EditFreeTrial";

export const EditFreeTrialSlice = createSlice({
  name: "editfreetrial",
  initialState: {
    editfreetrial: null,
    authenticatingeditfreetrial: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.editfreetrial = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingeditfreetrial = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditFreeTrial.fulfilled, (state, action) => {
      state.editfreetrial = action.payload;
      state.authenticated = false;
      state.authenticatingeditfreetrial = false;
      return state;
    });
    builder.addCase(EditFreeTrial.pending, (state, action) => {
      state.authenticatingeditfreetrial = true;
      state.authenticated = true;
    });
    builder.addCase(EditFreeTrial.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingeditfreetrial = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditFreeTrialSlice.actions;

export const EditFreeTrialSelector = (state) => state.editfreetrial;
