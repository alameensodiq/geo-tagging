import { createSlice } from '@reduxjs/toolkit';
import { SuperCorporatedetails } from '../Apis/SuperCorporateDetail';

export const SuperCorporateDetailsSlice = createSlice({
  name: 'supercorporatedetails',
  initialState: {
    supercorporatedetails: null,
    authenticatingsupercorporatedetails: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.supercorporatedetails = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsupercorporate = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SuperCorporatedetails.fulfilled, (state, action) => {
      state.supercorporatedetails = action.payload;
      state.authenticated = false;
      state.authenticatingsupercorporatedetails = false;
      return state;
    });
    builder.addCase(SuperCorporatedetails.pending, (state, action) => {
        state.authenticatingsupercorporatedetails = true;
        state.authenticated = true;
    });
    builder.addCase(SuperCorporatedetails.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingsupercorporatedetails = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = SuperCorporateDetailsSlice.actions;

export const SuperCorporateDetailsSelector = (state) => state.supercorporatedetails;
