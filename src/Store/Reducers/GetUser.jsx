import { createSlice } from '@reduxjs/toolkit';
import { GetUser } from '../Apis/GetUser';

export const GetUserSlice = createSlice({
  name: 'getuser',
  initialState: {
    getuser: null,
    authenticatinggetuser: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.getuser = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinggetuser = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetUser.fulfilled, (state, action) => {
      state.getuser = action.payload;
      state.authenticated = false;
      state.authenticatinggetuser = false;
      return state;
    });
    builder.addCase(GetUser.pending, (state, action) => {
        state.authenticatinggetuser = true;
        state.authenticated = true;
    });
    builder.addCase(GetUser.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatinggetuser = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = GetUserSlice.actions;

export const GetUserSelector = (state) => state.getuser;
