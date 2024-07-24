import { createSlice } from '@reduxjs/toolkit';
import { SuperCorporateDetailProject } from '../Apis/SuperCorporateDetailProject';

export const SuperCorporateDetailsProjectSlice = createSlice({
  name: 'supercorporatedetailsproject',
  initialState: {
    supercorporatedetailsproject: null,
    authenticatingsupercorporatedetailsproject: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.supercorporatedetailsproject = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsupercorporatedetailsproject = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SuperCorporateDetailProject.fulfilled, (state, action) => {
      state.supercorporatedetailsproject = action.payload;
      state.authenticated = false;
      state.authenticatingsupercorporatedetailsproject = false;
      return state;
    });
    builder.addCase(SuperCorporateDetailProject.pending, (state, action) => {
        state.authenticatingsupercorporatedetailsproject = true;
        state.authenticated = true;
    });
    builder.addCase(SuperCorporateDetailProject.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingsupercorporatedetailsproject = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = SuperCorporateDetailsProjectSlice.actions;

export const SuperCorporateDetailProjectSelector = (state) => state.supercorporatedetailsproject;
