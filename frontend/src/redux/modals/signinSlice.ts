import { createSlice } from "@reduxjs/toolkit";

interface SigninModalState {
  isOpen: boolean;
}

const initialState: SigninModalState = {
  isOpen: false,
};

const signinModalSlice = createSlice({
  name: "signinModal",
  initialState,
  reducers: {
    openSigninModal: (state) => {
      state.isOpen = true;
    },
    closeSigninModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSigninModal, closeSigninModal } = signinModalSlice.actions;

export default signinModalSlice.reducer;
