import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users-slice';
import adminSlice from './admin-slice';

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    adminUsers: adminSlice.reducer
  },
});

export default store;
