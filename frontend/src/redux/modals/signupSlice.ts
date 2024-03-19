import { createSlice } from "@reduxjs/toolkit";

interface SignupModalState {
  isOpen: boolean;
}

const initialState: SignupModalState = {
  isOpen: false,
};

const signupModalSlice = createSlice({
  name: "signupModal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
      state.isOpen = true;
    },
    closeSignupModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSignupModal, closeSignupModal } = signupModalSlice.actions;

export default signupModalSlice.reducer;
