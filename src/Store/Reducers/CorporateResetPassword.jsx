import { createSlice } from '@reduxjs/toolkit';
import { CorporateResetPassword } from '../Apis/CorporateResetPassword';

export const CorporateResetPasswordSlice = createSlice({
  name: 'resetpassword',
  initialState: {
    resetpassword: null,
    authenticatingresetpassword: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.resetpassword = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingresetpassword = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateResetPassword.fulfilled, (state, action) => {
      state.resetpassword = action.payload;
      state.authenticated = false;
      state.authenticatingresetpassword = false;
      return state;
    });
    builder.addCase(CorporateResetPassword.pending, (state, action) => {
        state.authenticatingresetpassword = true;
        state.authenticated = true;
    });
    builder.addCase(CorporateResetPassword.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingresetpassword = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CorporateResetPasswordSlice.actions;

export const CorporateResetPasswordSelector = (state) => state.resetpassword;
