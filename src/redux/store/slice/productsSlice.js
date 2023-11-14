import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllCategories",
  async () => {
    try {
      const response = await fetch("http://localhost:3333/categories/all");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "done";
        state.productsList = action.payload;
      });
  },
});

export default productsSlice.reducer;
