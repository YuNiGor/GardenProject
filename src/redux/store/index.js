import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/cotegoriesSlice";
import productsSlice from "./slice/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsSlice,
  },
});
