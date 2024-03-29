import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sales: [],
  errors: null,
  loading: false,
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    getSalesStart: (state: any) => {
      state.sales = null;
      state.errors = null;
      state.loading = true;
    },
    getSalesSuccess: (state: any, action: any) => {
      state.sales = action.payload;
      state.errors = null;
      state.loading = false;
    },
    getSalesFailure: (state: any, action: any) => {
      state.sales = null;
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const { getSalesStart, getSalesSuccess, getSalesFailure } =
  salesSlice.actions;

export default salesSlice.reducer;
