import { createSlice } from "@reduxjs/toolkit";
import { openAmazon } from "../actions/amazonActions";

const amazonSlice = createSlice({
  name: "amazon",
  initialState: {
    status: "idle",
  },
  extraReducers: {
    [openAmazon.pending]: (state) => {
      state.status = "loading";
    },
    [openAmazon.error]: (state) => {
      state.status = "error";
    },
    [openAmazon.fulfilled]: (state) => {
      state.status = "succeded";
    },
  },
});

export default amazonSlice.reducer;
