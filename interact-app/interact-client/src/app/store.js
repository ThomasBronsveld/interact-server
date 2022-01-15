import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counterSlice';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
