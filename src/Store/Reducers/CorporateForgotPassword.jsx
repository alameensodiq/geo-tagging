import { createSlice } from '@reduxjs/toolkit';
import { CorporateForgotPassword } from '../Apis/CorporateForgotPassword';

export const CorporateForgotPasswordSlice = createSlice({
  name: 'forgotpassword',
  initialState: {
    forgotpassword: null,
    authenticatingforgotpassword: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.forgotpassword = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingforgotpassword = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateForgotPassword.fulfilled, (state, action) => {
      state.forgotpassword = action.payload;
      state.authenticated = false;
      state.authenticatingforgotpassword = false;
      return state;
    });
    builder.addCase(CorporateForgotPassword.pending, (state, action) => {
        state.authenticatingforgotpassword = true;
        state.authenticated = true;
    });
    builder.addCase(CorporateForgotPassword.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingforgotpassword = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CorporateForgotPasswordSlice.actions;

export const CorporateForgotPasswordSelector = (state) => state.forgotpassword;
