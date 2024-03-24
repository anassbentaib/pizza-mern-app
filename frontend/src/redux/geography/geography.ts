import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  geography: [],
  errors: null,
  loading: false,
};

const geographySlice = createSlice({
  name: "geography",
  initialState,
  reducers: {
  
    getGeographyStart: (state: any) => {
      state.geography = null;
      state.errors = null;
      state.loading = true;
    },
    getGeographySuccess: (state: any, action: any) => {
      state.geography = action.payload;
      state.errors = null;
      state.loading = false;
    },
    getGeographyFailure: (state: any, action: any) => {
      state.geography = null;
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const {
  getGeographyStart,
  getGeographySuccess,
  getGeographyFailure,
} = geographySlice.actions;

export default geographySlice.reducer;
