import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { user : null },
  reducers: {
    replaceUsers(state, action) {
      state.user = action.payload;
      console.log(state.user)
      
    },

    callCar(state, action) {
      console.log(state.user)
      console.log(action.payload)
      // state.user.callCar = action.payload.callCar
      // state.user.reason = action.payload.reason
      
    }
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
