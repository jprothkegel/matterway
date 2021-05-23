import { createAsyncThunk } from "@reduxjs/toolkit";
import { callGetAmazon } from "../../services/AmazonService";

export const openAmazon = createAsyncThunk("amazon/open", async (bookName) => {
  const response = await callGetAmazon(bookName);
  return response.data;
});
