import { createSlice } from "@reduxjs/toolkit";
import { EditAdminDetails } from "../Apis/EditAdminDetails";

export const EditAdminDetailsSlice = createSlice({
  name: "editadmindetails",
  initialState: {
    editadmindetails: null,
    authenticatingeditadmindetails: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.editadmindetails = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingeditadmindetails = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditAdminDetails.fulfilled, (state, action) => {
      state.editadmindetails = action.payload;
      state.authenticated = false;
      state.authenticatingeditadmindetails = false;
      return state;
    });
    builder.addCase(EditAdminDetails.pending, (state, action) => {
      state.authenticatingeditadmindetails = true;
      state.authenticated = true;
    });
    builder.addCase(EditAdminDetails.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingeditadmindetails = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditAdminDetailsSlice.actions;

export const EditAdminDetailsSelector = (state) => state.editadmindetails;
