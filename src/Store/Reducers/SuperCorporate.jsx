import { createSlice } from '@reduxjs/toolkit';
import { SuperCorporate } from '../Apis/SuperCorporate';

export const SuperCorporateSlice = createSlice({
  name: 'supercorporate',
  initialState: {
    supercorporate: null,
    authenticatingsupercorporate: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.supercorporate = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsupercorporate = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SuperCorporate.fulfilled, (state, action) => {
      state.supercorporate = action.payload;
      state.authenticated = false;
      state.authenticatingsupercorporate = false;
      return state;
    });
    builder.addCase(SuperCorporate.pending, (state, action) => {
        state.authenticatingsupercorporate = true;
        state.authenticated = true;
    });
    builder.addCase(SuperCorporate.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingsupercorporate = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = SuperCorporateSlice.actions;

export const SuperCorporateSelector = (state) => state.supercorporate;
