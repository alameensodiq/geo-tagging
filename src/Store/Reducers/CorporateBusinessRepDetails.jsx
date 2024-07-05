import { createSlice } from '@reduxjs/toolkit';
import { CorporateBusinessRepDetails } from '../Apis/CorporateBusinessRepDetails';

export const CorporateBusinessRepDetailsSlice = createSlice({
  name: 'businessrepdetails',
  initialState: {
    businessrepdetails: null,
    authenticatingbusinessrepdetails: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.businessrepdetails = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingbusinessrepdetails = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateBusinessRepDetails.fulfilled, (state, action) => {
      state.businessrepdetails = action.payload;
      state.authenticated = false;
      state.authenticatingbusinessrepdetails = false;
      return state;
    });
    builder.addCase(CorporateBusinessRepDetails.pending, (state, action) => {
        state.authenticatingbusinessrepdetails = true;
        state.authenticated = true;
    });
    builder.addCase(CorporateBusinessRepDetails.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingbusinessrepdetailsp = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CorporateBusinessRepDetailsSlice.actions;

export const CorporateBusinessRepDetailsSelector = (state) => state.businessrepdetails;
