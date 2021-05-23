import { createAsyncThunk } from '@reduxjs/toolkit';
import { callGetAmazon } from '../../services/AmazonService';

export const openAmazon = createAsyncThunk('amazon/open', async (bookName) => {
  const response = await callGetAmazon(
    bookName,
    process.env.REACT_APP_AMAZON_USERNAME,
    process.env.REACT_APP_AMAZON_PASSWORD,
  );
  return response.data;
});
