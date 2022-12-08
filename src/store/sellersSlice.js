import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SELLERS_API = "https://dev.mentorclan.com/api/mentors#";

export const sellerSlice = createSlice({
  name: "sellers",
  initialState: {
    sellers: [],
    displaySeller: [],
    isLoading: false,
    error: "",
  },
  extraReducers: builder => {
    // loading
    builder.addCase(fetchSellers.pending, state => {
      state.isLoading = true;
    });

    // successful
    builder.addCase(fetchSellers.fulfilled, (state, action) => {
      state.sellers = action.payload;
      state.displaySeller = action.payload;
      state.isLoading = false;
      state.error = "";
    });

    // error
    builder.addCase(fetchSellers.rejected, state => {
      state.isLoading = false;
      state.error = "Something went wrong";
    });
  },
  reducers: {
    filterByDay: (state, action) => {
      if (action.payload === "allDay") {
        state.displaySeller = state.sellers;
      } else {
        state.displaySeller = state.sellers.filter(seller =>
          Object.keys(seller?.slotDetails?.availability).includes(
            action.payload
          )
        );
      }
    },
  },
});

export const fetchSellers = createAsyncThunk(
  "sellers/fetchSellers",
  async () => {
    const res = await axios.get(SELLERS_API);
    const data = await res.data.data;
    return data;
  }
);
