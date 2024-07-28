import { createSlice } from "@reduxjs/toolkit";
import { AdminEditteam } from "../Apis/AdminEditteam";

export const AdminEditteamSlice = createSlice({
  name: "admineditteam",
  initialState: {
    admineditteam: null,
    authenticatingadmineditteam: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.admineditteam = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingadmineditteam = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AdminEditteam.fulfilled, (state, action) => {
      state.admineditteam = action.payload;
      state.authenticated = false;
      state.authenticatingadmineditteam = false;
      return state;
    });
    builder.addCase(AdminEditteam.pending, (state, action) => {
      state.authenticatingadmineditteam = true;
      state.authenticated = true;
    });
    builder.addCase(AdminEditteam.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingadmineditteam = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AdminEditteamSlice.actions;

export const AdminEditteamSelector = (state) => state.admineditteam;
