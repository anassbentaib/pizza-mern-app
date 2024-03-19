import { createSlice } from "@reduxjs/toolkit";

interface ProfileModalState {
  isOpen: boolean;
}

const initialState: ProfileModalState = {
  isOpen: false,
};

const profileModalSlice = createSlice({
  name: "profileModal",
  initialState,
  reducers: {
    openProfileModal: (state) => {
      state.isOpen = true;
    },
    closeProfileModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { closeProfileModal, openProfileModal } = profileModalSlice.actions;

export default profileModalSlice.reducer;
