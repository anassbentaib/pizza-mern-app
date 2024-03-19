import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  currentUser: any;
  isLoading: boolean;
  errors: any;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  errors: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state: any) => {
      state.isLoading = true;
      state.currentUser = null;
      state.errors = null;
    },
    signInSuccess: (state: any, action: any) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.errors = null;
    },
    signInFailure: (state: any, action: any) => {
      state.isLoading = false;
      state.currentUser = null;
      state.errors = action.payload;
    },
    updateStart: (state: any) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state: any, action: any) => {
      state.currentUser = action.payload;
      state.error = null;
      state.loading = false;
    },
    updateFailure: (state: any, action: { payload: string }) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signinStart,
  signInFailure,
  signInSuccess,
  updateStart,
  updateFailure,
  updateSuccess,
} = userSlice.actions;
export default userSlice.reducer;
