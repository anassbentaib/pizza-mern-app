import { createSlice } from "@reduxjs/toolkit";

interface CallModalState {
  isOpen: boolean;
}

const initialState: CallModalState = {
  isOpen: false,
};

const callModalSlice = createSlice({
  name: "callModal",
  initialState,
  reducers: {
    openCallModal: (state) => {
      state.isOpen = true;
    },
    closeCallModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openCallModal, closeCallModal } = callModalSlice.actions;
export default callModalSlice.reducer;
