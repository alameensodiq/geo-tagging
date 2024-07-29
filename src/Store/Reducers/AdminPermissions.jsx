import { createSlice } from "@reduxjs/toolkit";
import { AdminPermissions } from "../Apis/AdminPermissions";

export const AdminPermissionsSlice = createSlice({
  name: "adminpermission",
  initialState: {
    adminpermission: null,
    authenticatingadminpermission: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.adminpermission = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingadminpermission = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AdminPermissions.fulfilled, (state, action) => {
      state.adminpermission = action.payload;
      state.authenticated = false;
      state.authenticatingadminpermission = false;
      return state;
    });
    builder.addCase(AdminPermissions.pending, (state, action) => {
      state.authenticatingadminpermission = true;
      state.authenticated = true;
    });
    builder.addCase(AdminPermissions.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingadminpermission = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AdminPermissionsSlice.actions;

export const AdminPermissionsSelector = (state) => state.adminpermission;
