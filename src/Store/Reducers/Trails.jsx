import { createSlice } from "@reduxjs/toolkit";
import { Trails } from "../Apis/Trails";

export const TrailsSlice = createSlice({
  name: "trails",
  initialState: {
    trails: null,
    authenticatingtrails: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.trails = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingtrails = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Trails.fulfilled, (state, action) => {
      state.trails = action.payload;
      state.authenticated = false;
      state.authenticatingtrails = false;
      return state;
    });
    builder.addCase(Trails.pending, (state, action) => {
      state.authenticatingtrails = true;
      state.authenticated = true;
    });
    builder.addCase(Trails.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingtrails = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = TrailsSlice.actions;

export const TrailsSelector = (state) => state.trails;
