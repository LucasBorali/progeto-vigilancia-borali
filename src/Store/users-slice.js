import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { user: null },
  reducers: {
    replaceUsers(state, action) {
      const key = Object.keys(action.payload);
      state.user = action.payload[key];
    },
    callCar(state, action) {
      state.user.reason = action.payload.reason;
      state.user.callCar = action.payload.callCar;
    },
    cancelCalling(state,action) {
      state.user.callCar = false
    }
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
