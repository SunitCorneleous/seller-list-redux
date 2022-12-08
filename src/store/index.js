import { configureStore } from "@reduxjs/toolkit";
import { sellerSlice } from "./sellersSlice";

const { fetchSellers } = sellerSlice.actions;

const store = configureStore({
  reducer: { sellers: sellerSlice.reducer },
});

export default store;
