import { createSlice } from "@reduxjs/toolkit";
import { AssignedRep } from "../Apis/AssignedRep";

export const AssignedRepSlice = createSlice({
  name: "addproject",
  initialState: {
    assigned: null,
    authenticatingassigned: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.assigned = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingassigned = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AssignedRep.fulfilled, (state, action) => {
      state.assigned = action.payload;
      state.authenticated = false;
      state.authenticatingassigned = false;
      return state;
    });
    builder.addCase(AssignedRep.pending, (state, action) => {
      state.authenticatingassigned = true;
      state.authenticated = true;
    });
    builder.addCase(AssignedRep.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingassigned = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AssignedRepSlice.actions;

export const AssignedRepSelector = (state) => state.assigned;
