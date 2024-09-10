import { createSlice } from '@reduxjs/toolkit';
import { SubPunctual } from '../Apis/SubPunctual';

export const SubPunctualSlice = createSlice({
  name: 'subpunctual',
  initialState: {
    subpunctual: null,
    authenticatingsubpunctual: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.subpunctual = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsubpunctual= false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SubPunctual.fulfilled, (state, action) => {
      state.subpunctual = action.payload;
      state.authenticated = false;
      state.authenticatingsubpunctual = false;
      return state;
    });
    builder.addCase(SubPunctual.pending, (state, action) => {
        state.authenticatingsubpunctual = true;
        state.authenticated = true;
    });
    builder.addCase(SubPunctual.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingsubpunctual = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = SubPunctualSlice.actions;

export const SubPunctualSelector = (state) => state.subpunctual;
