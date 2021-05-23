import { createSlice } from "@reduxjs/toolkit";
import { getBook } from "../actions/bookActions";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    fetchStatus: "idle",
    bookName: "",
    bookImage: "",
  },
  extraReducers: {
    [getBook.pending]: (state) => {
      state.fetchStatus = "loading";
    },
    [getBook.error]: (state) => {
      state.fetchStatus = "error";
    },
    [getBook.fulfilled]: (state, action) => {
      state.fetchStatus = "succeded";
      state.bookName = action.payload.data.title;
      state.bookImage = action.payload.data.image;
    },
  },
});

export default bookSlice.reducer;
