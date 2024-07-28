import { createSlice } from "@reduxjs/toolkit";
import { EditTeamDetails } from "../Apis/EditTeamDetails";

export const EditTeamSlice = createSlice({
  name: "editteamdetails",
  initialState: {
    editteamdetailsy: null,
    authenticatingeditteamdetailsy: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.editteamdetailsy = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingeditteamdetailsy = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditTeamDetails.fulfilled, (state, action) => {
      state.editteamdetailsy = action.payload;
      state.authenticated = false;
      state.authenticatingeditteamdetailsy = false;
      return state;
    });
    builder.addCase(EditTeamDetails.pending, (state, action) => {
      state.authenticatingeditteamdetailsy = true;
      state.authenticated = true;
    });
    builder.addCase(EditTeamDetails.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingeditteamdetailsy = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditTeamSlice.actions;

export const EditTeamSelector = (state) => state.editteamdetailsy;
