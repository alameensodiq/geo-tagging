import { createSlice } from '@reduxjs/toolkit';
import { CorporateUser } from '../Apis/CorporateUser';

export const CorporateUserSlice = createSlice({
  name: 'userteam',
  initialState: {
    userteam: null,
    authenticatinguserteam: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.userteam = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinguserteam = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CorporateUser.fulfilled, (state, action) => {
      state.userteam = action.payload;
      state.authenticated = false;
      state.authenticatinguserteam = false;
      return state;
    });
    builder.addCase(CorporateUser.pending, (state, action) => {
        state.authenticatingproject = true;
        state.authenticated = true;
    });
    builder.addCase(CorporateUser.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatinguserteam = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CorporateUserSlice.actions;

export const CorporateUserSelector = (state) => state.userteam;
