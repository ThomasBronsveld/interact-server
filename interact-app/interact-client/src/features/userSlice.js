import {  createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    homepage: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null;
    },
    homepage: (state, action) => {
      state.homepage = action.payload.homepage
    }

  },

});

export const { login, logout, homepage } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectHomepage = (state) => state.user.homepage;

export default userSlice.reducer;
