import { createSlice } from "@reduxjs/toolkit";
import { AddActiveRep } from "../Apis/AddActiveRep";

export const AddActiveRepSlice = createSlice({
  name: "addactiverep",
  initialState: {
    addactiverep: null,
    authenticatingaddactiverep: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.addactiverep = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaddactiverep = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AddActiveRep.fulfilled, (state, action) => {
      state.addactiverep = action.payload;
      state.authenticated = false;
      state.authenticatingaddactiverep = false;
      return state;
    });
    builder.addCase(AddActiveRep.pending, (state, action) => {
      state.authenticatingaddactiverep = true;
      state.authenticated = true;
    });
    builder.addCase(AddActiveRep.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaddactiverep = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AddActiveRepSlice.actions;

export const AddActiveRepSelector = (state) => state.addactiverep;
