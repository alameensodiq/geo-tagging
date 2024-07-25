import { createSlice } from '@reduxjs/toolkit';
import { Allpermission } from '../Apis/AllPermission';

export const AllpermissionSlice = createSlice({
  name: 'allpermission',
  initialState: {
    allpermission: null,
    authenticatingallpermission: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.allpermission = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingallpermission = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Allpermission.fulfilled, (state, action) => {
      state.allpermission = action.payload;
      state.authenticated = false;
      state.authenticatingallpermission = false;
      return state;
    });
    builder.addCase(Allpermission.pending, (state, action) => {
        state.authenticatingallpermission = true;
        state.authenticated = true;
    });
    builder.addCase(Allpermission.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingallpermission = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = AllpermissionSlice.actions;

export const AllpermissionSelector = (state) => state.allpermission;
