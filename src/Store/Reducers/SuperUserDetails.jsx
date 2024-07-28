import { createSlice } from "@reduxjs/toolkit";
import { SuperUserDetails } from "../Apis/SuperUserdetails";

export const SuperUserDetailsSlice = createSlice({
  name: "superuserdetails",
  initialState: {
    superuserdetails: null,
    authenticatingsuperuserdetails: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.superuserdetails = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsuperuserdetails = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(SuperUserDetails.fulfilled, (state, action) => {
      state.superuserdetails = action.payload;
      state.authenticated = false;
      state.authenticatingsuperuserdetails = false;
      return state;
    });
    builder.addCase(SuperUserDetails.pending, (state, action) => {
      state.authenticatingsuperuserdetails = true;
      state.authenticated = true;
    });
    builder.addCase(SuperUserDetails.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingsuperuserdetails = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = SuperUserDetailsSlice.actions;

export const SuperUserDetailsSelector = (state) => state.superuserdetails;
