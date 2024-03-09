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
      console.log("🚀 ~  state.isOpen = true;:", state.isOpen);
    },
    closeSignupModal: (state) => {
      state.isOpen = false;
      console.log("🚀 ~ state.isOpen = false;:", (state.isOpen = false));
    },
  },
});

export const { openSignupModal, closeSignupModal } = signupModalSlice.actions;
console.log("🚀 ~ closeSignupModal:", closeSignupModal);
console.log("🚀 ~ openSignupModal:", openSignupModal);

export default signupModalSlice.reducer;
