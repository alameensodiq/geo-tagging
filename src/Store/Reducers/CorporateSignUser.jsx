import { createSlice } from '@reduxjs/toolkit';
import { CorporateSignUser } from '../Apis/CorporateSignUser';

export const CorporateSignUserSlice = createSlice({
  name: 'create',
  initialState: {
    corporateuser: null,
    authenticating: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.corporateuser = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticating = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateSignUser.fulfilled, (state, action) => {
      state.corporateuser = action.payload;
      state.authenticated = false;
      state.authenticating = false;
      return state;
    });
    builder.addCase(CorporateSignUser.pending, (state, action) => {
        state.authenticating = true;
        state.authenticated = true;
    });
    builder.addCase(CorporateSignUser.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticating = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CorporateSignUserSlice.actions;

export const CorporateSignUserSelector = (state) => state.corporateuser;
