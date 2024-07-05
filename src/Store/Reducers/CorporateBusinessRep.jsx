import { createSlice } from '@reduxjs/toolkit';
import { CorporateBusinessRep } from '../Apis/CorporateBusinessRep';

export const CorporateBusinessRepSlice = createSlice({
  name: 'businessrep',
  initialState: {
    businessrep: null,
    authenticatingbusinessrep: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.businessrep = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingbusinessrep = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateBusinessRep.fulfilled, (state, action) => {
      state.businessrep = action.payload;
      state.authenticated = false;
      state.authenticatingbusinessrep = false;
      return state;
    });
    builder.addCase(CorporateBusinessRep.pending, (state, action) => {
        state.authenticatingbusinessrep = true;
        state.authenticated = true;
    });
    builder.addCase(CorporateBusinessRep.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingbusinessrep = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CorporateBusinessRepSlice.actions;

export const CorporateBusinessRepSelector = (state) => state.businessrep;
