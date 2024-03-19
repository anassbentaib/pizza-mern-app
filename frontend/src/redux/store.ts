import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signupReducer from "./modals/signupSlice";
import signinReducer from "./modals/signinSlice";
import userReducers from "./user/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import callReducer from "./modals/CallSlice";
import profileReducer from "./modals/profileSlice";

const rootReducer = combineReducers({
  signupModal: signupReducer,
  user: userReducers,
  signinModal: signinReducer,
  callModal: callReducer,
  profileModal: profileReducer,
});
const persistsConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducers = persistReducer(persistsConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
