import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  errors: null,
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProductStart: (state: any) => {
      state.products = null;
      state.errors = null;
      state.loading = true;
    },
    createProductSuccess: (state: any, action: any) => {
      state.products = action.payload;
      state.errors = null;
      state.loading = false;
    },
    createProductFailure: (state: any, action: any) => {
      state.products = null;
      state.errors = action.payload;
      state.loading = false;
    },
    getProductStart: (state: any) => {
      state.products = null;
      state.errors = null;
      state.loading = true;
    },
    getProductSuccess: (state: any, action: any) => {
      state.products = action.payload;
      state.errors = null;
      state.loading = false;
    },
    getProductFailure: (state: any, action: any) => {
      state.products = null;
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const {
  createProductFailure,
  createProductSuccess,
  createProductStart,
  getProductStart,
  getProductSuccess,
  getProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
