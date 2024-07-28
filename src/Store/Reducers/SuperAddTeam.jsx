import { createSlice } from "@reduxjs/toolkit";
import { SuperAddTeam } from "../Apis/SuperAddteam";

export const SuperAddTeamSlice = createSlice({
  name: "superaddteam",
  initialState: {
    superaddteam: null,
    authenticatingsuperaddteam: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.superaddteam = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsuperaddteam = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(SuperAddTeam.fulfilled, (state, action) => {
      state.superaddteam = action.payload;
      state.authenticated = false;
      state.authenticatingsuperaddteam = false;
      return state;
    });
    builder.addCase(SuperAddTeam.pending, (state, action) => {
      state.authenticatingsuperaddteam = true;
      state.authenticated = true;
    });
    builder.addCase(SuperAddTeam.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingsuperaddteam = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = SuperAddTeamSlice.actions;

export const SuperAddTeamSelector = (state) => state.superaddteam;
