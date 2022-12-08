import { configureStore } from "@reduxjs/toolkit";
import { sellerSlice } from "./sellersSlice";

export const { filterByDay } = sellerSlice.actions;

const store = configureStore({
  reducer: { sellers: sellerSlice.reducer },
});

export default store;
