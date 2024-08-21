import { createSlice } from "@reduxjs/toolkit";
import { EditSubing } from "../Apis/EditSub";

export const EditSubSlice = createSlice({
  name: "editsub",
  initialState: {
    editsub: null,
    authenticatingeditsub: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.editsub = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingeditsub = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditSubing.fulfilled, (state, action) => {
      state.editsub = action.payload;
      state.authenticated = false;
      state.authenticatingeditsub = false;
      return state;
    });
    builder.addCase(EditSubing.pending, (state, action) => {
      state.authenticatingeditsub = true;
      state.authenticated = true;
    });
    builder.addCase(EditSubing.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingeditsub = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditSubSlice.actions;

export const EditSubSelector = (state) => state.editsub;
