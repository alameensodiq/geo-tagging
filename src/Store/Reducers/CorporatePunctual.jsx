import { createSlice } from '@reduxjs/toolkit';
import { CorporatePunctual } from '../Apis/CorporatePunctual';

export const CorporatePunctualSlice = createSlice({
  name: 'corporatepunctual',
  initialState: {
    corporatepunctual: null,
    authenticatingcorporatepunctual: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.corporatepunctual = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcorporatepunctual= false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CorporatePunctual.fulfilled, (state, action) => {
      state.corporatepunctual = action.payload;
      state.authenticated = false;
      state.authenticatingcorporatepunctual = false;
      return state;
    });
    builder.addCase(CorporatePunctual.pending, (state, action) => {
        state.authenticatingcorporatepunctual = true;
        state.authenticated = true;
    });
    builder.addCase(CorporatePunctual.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingcorporatepunctual = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CorporatePunctualSlice.actions;

export const CorporatePunctualSelector = (state) => state.corporatepunctual;
