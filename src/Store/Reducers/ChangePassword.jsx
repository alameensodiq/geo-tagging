import { createSlice } from '@reduxjs/toolkit';
import { ChangePassword } from '../Apis/ChangePassword';

export const ChangePasswordSlice = createSlice({
  name: 'changepass',
  initialState: {
    changepass: null,
    authenticatingchangepass: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.changepass = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingchangepass = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ChangePassword.fulfilled, (state, action) => {
      state.changepass = action.payload;
      state.authenticated = false;
      state.authenticatingchangepass = false;
      return state;
    });
    builder.addCase(ChangePassword.pending, (state, action) => {
        state.authenticatingchangepass = true;
        state.authenticated = true;
    });
    builder.addCase(ChangePassword.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingchangepass = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = ChangePasswordSlice.actions;

export const ChangePasswordSelector = (state) => state.changepass;
