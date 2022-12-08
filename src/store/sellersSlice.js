import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SELLERS_API = "https://dev.mentorclan.com/api/mentors#";

export const sellerSlice = createSlice({
  name: "sellers",
  initialState: {
    sellers: [],
    isLoading: false,
    error: "",
  },
  extraReducers: builder => {
    // loading
    builder.addCase(fetchSellers.pending, state => {
      state.isLoading = true;
    });

    // successful
    builder.addCase(fetchSellers.fulfilled, (state, actions) => {
      state.sellers = actions.payload;
      state.isLoading = false;
      state.error = "";
    });

    // error
    builder.addCase(fetchSellers.rejected, state => {
      (state.isLoading = false), (state.error = "Something went wrong");
    });
  },
});

export const fetchSellers = createAsyncThunk(
  "sellers/fetchSellers",
  async () => {
    //   return axios.get(SELLERS_API).then(res => {
    //     res.data.data;
    //   });

    const res = await axios.get(SELLERS_API);
    const data = await res.data.data;
    return data;
  }
);
