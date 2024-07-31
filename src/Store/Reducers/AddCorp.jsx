import { createSlice } from "@reduxjs/toolkit";
import { AddCorp } from "../Apis/AddCorp";

export const AddCorpSlice = createSlice({
  name: "addcorping",
  initialState: {
    addcorping: null,
    authenticatingaddcorping: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.addcorping = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaddcorping = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AddCorp.fulfilled, (state, action) => {
      state.addcorping = action.payload;
      state.authenticated = false;
      state.authenticatingaddcorping = false;
      return state;
    });
    builder.addCase(AddCorp.pending, (state, action) => {
      state.authenticatingaddcorping = true;
      state.authenticated = true;
    });
    builder.addCase(AddCorp.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaddcorping = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AddCorpSlice.actions;

export const AddCorpSelector = (state) => state.addcorping;
