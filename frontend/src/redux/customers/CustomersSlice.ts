import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
  errors: null,
  loading: false,
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
  
    getCustomersStart: (state: any) => {
      state.customers = null;
      state.errors = null;
      state.loading = true;
    },
    getCustomersSuccess: (state: any, action: any) => {
      state.customers = action.payload;
      state.errors = null;
      state.loading = false;
    },
    getCustomersFailure: (state: any, action: any) => {
      state.customers = null;
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const {
  getCustomersStart,
  getCustomersSuccess,
  getCustomersFailure,
} = customerSlice.actions;

export default customerSlice.reducer;
