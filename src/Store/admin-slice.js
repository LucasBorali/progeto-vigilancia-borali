import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: { users: null },
  reducers: {
    replaceInitialUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const adminActions = adminSlice.actions;

export default adminSlice;
