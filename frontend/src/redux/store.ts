import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./model/signupSlice";
import signinReducer from "./model/signinSlice";

const store = configureStore({
  reducer: {
    signupModal: signupReducer,
    signinModal: signinReducer,

  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
