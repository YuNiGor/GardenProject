import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
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

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesList: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.status = "done";
        state.categoriesList = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
