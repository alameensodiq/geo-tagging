import { createSlice } from '@reduxjs/toolkit';
import { SuperFreeConversion } from '../Apis/SuperFreeConversion';

export const SuperFreeConversionSlice = createSlice({
  name: 'freeconversion',
  initialState: {
    freeconversion: null,
    authenticatingfreeconversion: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.freeconversion = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingfreeconversion = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SuperFreeConversion.fulfilled, (state, action) => {
      state.freeconversion = action.payload;
      state.authenticated = false;
      state.authenticatingfreeconversion = false;
      return state;
    });
    builder.addCase(SuperFreeConversion.pending, (state, action) => {
        state.authenticatingfreeconversion = true;
        state.authenticated = true;
    });
    builder.addCase(SuperFreeConversion.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingfreeconversion = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = SuperFreeConversionSlice.actions;

export const SuperFreeConversionSelector = (state) => state.freeconversion;
