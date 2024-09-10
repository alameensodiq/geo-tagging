import { createSlice } from '@reduxjs/toolkit';
import { SuperSubCounts } from '../Apis/SuperSubCount';

export const SuperSubCountSlice = createSlice({
  name: 'supersubscount',
  initialState: {
    supersubscount: null,
    authenticatingsupersubscount: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.supersubscount = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsupersubscount = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SuperSubCounts.fulfilled, (state, action) => {
      state.supersubscount = action.payload;
      state.authenticated = false;
      state.authenticatingsupersubscount = false;
      return state;
    });
    builder.addCase(SuperSubCounts.pending, (state, action) => {
        state.authenticatingsupersubscount = true;
        state.authenticated = true;
    });
    builder.addCase(SuperSubCounts.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingsupersubscount = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = SuperSubCountSlice.actions;

export const SuperSubCountSelector = (state) => state.supersubscount;
