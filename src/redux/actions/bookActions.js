import { createAsyncThunk } from "@reduxjs/toolkit";

import { callGetBook } from "../../services/BookService";

export const getBook = createAsyncThunk("books/get", async (genre) => {
  const response = await callGetBook(genre);
  return response.data;
});
