import { createSlice } from "@reduxjs/toolkit";
import { AddTeam } from "../Apis/AddTeam";

export const AddTeamSlice = createSlice({
  name: "addteam",
  initialState: {
    addteam: null,
    authenticatingaddteam: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.addteam = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaddteam = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AddTeam.fulfilled, (state, action) => {
      state.addteam = action.payload;
      state.authenticated = false;
      state.authenticatingaddteam = false;
      return state;
    });
    builder.addCase(AddTeam.pending, (state, action) => {
      state.authenticatingaddteam = true;
      state.authenticated = true;
    });
    builder.addCase(AddTeam.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaddteam = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AddTeamSlice.actions;

export const AddTeamSelector = (state) => state.addteam;
