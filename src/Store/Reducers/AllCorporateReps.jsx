import { createSlice } from "@reduxjs/toolkit";
import { AllCorporateReps } from "../Apis/AllCorporateReps";

export const AllCorporateRepsSlice = createSlice({
  name: "allcorporatereps",
  initialState: {
    allpermission: null,
    authenticatingallcorporatereps: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.allpermission = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingallcorporatereps = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AllCorporateReps.fulfilled, (state, action) => {
      state.allcorporatereps = action.payload;
      state.authenticated = false;
      state.authenticatingallcorporatereps = false;
      return state;
    });
    builder.addCase(AllCorporateReps.pending, (state, action) => {
      state.authenticatingallcorporatereps = true;
      state.authenticated = true;
    });
    builder.addCase(AllCorporateReps.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingallcorporatereps = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AllCorporateRepsSlice.actions;

export const AllCorporateRepsSelector = (state) => state.allcorporatereps;
