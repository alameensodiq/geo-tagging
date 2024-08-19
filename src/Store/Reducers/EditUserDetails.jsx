import { createSlice } from "@reduxjs/toolkit";
import { EditDetails } from "../Apis/EditDetails";

export const EditDetailsSlice = createSlice({
  name: "editdetails",
  initialState: {
    editdetails: null,
    authenticatingeditdetails: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.editdetails = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingeditdetails = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditDetails.fulfilled, (state, action) => {
      state.editdetails = action.payload;
      state.authenticated = false;
      state.authenticatingeditdetails = false;
      return state;
    });
    builder.addCase(EditDetails.pending, (state, action) => {
      state.authenticatingeditdetails = true;
      state.authenticated = true;
    });
    builder.addCase(EditDetails.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingeditdetails = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditDetailsSlice.actions;

export const EditDetailsSelector = (state) => state.editdetails;
