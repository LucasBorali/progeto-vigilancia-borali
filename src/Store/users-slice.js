import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    replaceUsers(state, action) {
      state = action.payload.users;
    },

    addNewUser(state, action) {
      state[action.payload.uid] = action.payload;
      console.log(action.payload.user);
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
