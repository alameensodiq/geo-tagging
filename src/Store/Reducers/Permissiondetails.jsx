import { createSlice } from "@reduxjs/toolkit";
import { Permissionetails } from "../Apis/Permissiondetails";

export const PermissiondetailsSlice = createSlice({
  name: "permissiondetails",
  initialState: {
    permissiondetails: null,
    authenticatingpermissiondetails: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.permissiondetails = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingpermissiondetails = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Permissionetails.fulfilled, (state, action) => {
      state.permissiondetails = action.payload;
      state.authenticated = false;
      state.authenticatingpermissiondetails = false;
      return state;
    });
    builder.addCase(Permissionetails.pending, (state, action) => {
      state.authenticatingpermissiondetails = true;
      state.authenticated = true;
    });
    builder.addCase(Permissionetails.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingpermissiondetails = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = PermissiondetailsSlice.actions;

export const PermissiondetailsSelector = (state) => state.permissiondetails;
