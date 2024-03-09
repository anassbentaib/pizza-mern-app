import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./model/signupSlice";
const store = configureStore({
  reducer: {
    signupModal: signupReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
