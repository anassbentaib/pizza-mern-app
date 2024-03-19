import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signupReducer from "./model/signupSlice";
import signinReducer from "./model/signinSlice";
import userReducers from "./user/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import callReducer from './model/CallSlice'

const rootReducer = combineReducers({
  signupModal: signupReducer,
  user: userReducers,
  signinModal: signinReducer,
  callModal: callReducer,

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
