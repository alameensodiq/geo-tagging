import { createSlice } from '@reduxjs/toolkit';
import { SuperSubs } from '../Apis/SuperSub';

export const SuperSubsSlice = createSlice({
  name: 'supersub',
  initialState: {
    supersub: null,
    authenticatingsupersub: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.supersub = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsupersub = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SuperSubs.fulfilled, (state, action) => {
      state.supersub = action.payload;
      state.authenticated = false;
      state.authenticatingsupersub = false;
      return state;
    });
    builder.addCase(SuperSubs.pending, (state, action) => {
        state.authenticatingsupersub = true;
        state.authenticated = true;
    });
    builder.addCase(SuperSubs.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingsupersub = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = SuperSubsSlice.actions;

export const SuperSubsSelector = (state) => state.supersub;
