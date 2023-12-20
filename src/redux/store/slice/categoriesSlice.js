import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/categories/all`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesList: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.status = "done";
        state.categoriesList = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
