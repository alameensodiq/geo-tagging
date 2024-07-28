import { createSlice } from "@reduxjs/toolkit";
import { AdminUser } from "../Apis/AdminUser";

export const AdminUserSlice = createSlice({
  name: "adminuserteam",
  initialState: {
    adminuserteam: null,
    authenticatingadminuserteam: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.adminuserteam = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingadminuserteam = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AdminUser.fulfilled, (state, action) => {
      state.adminuserteam = action.payload;
      state.authenticated = false;
      state.authenticatingadminuserteam = false;
      return state;
    });
    builder.addCase(AdminUser.pending, (state, action) => {
      state.authenticatingadminuserteam = true;
      state.authenticated = true;
    });
    builder.addCase(AdminUser.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingadminuserteam = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AdminUserSlice.actions;

export const AdminUserSelector = (state) => state.adminuserteam;
