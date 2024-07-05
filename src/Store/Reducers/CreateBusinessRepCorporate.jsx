import { createSlice } from '@reduxjs/toolkit';
import { CreateBusinessRepCorporate } from '../Apis/CreateBusinessRepCorporate';

export const CreateBusinessRepCorporateSlice = createSlice({
  name: 'createbus',
  initialState: {
    createbus: null,
    authenticatingcreatebus: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.createbus = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcreatebus = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CreateBusinessRepCorporate.fulfilled, (state, action) => {
      state.createbus = action.payload;
      state.authenticated = false;
      state.authenticatingcreatebus = false;
      return state;
    });
    builder.addCase(CreateBusinessRepCorporate.pending, (state, action) => {
        state.authenticatingcreatebus = true;
        state.authenticated = true;
    });
    builder.addCase(CreateBusinessRepCorporate.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingcreatebus = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CreateBusinessRepCorporateSlice.actions;

export const CreateBusinessRepCorporateSelector = (state) => state.createbus;
