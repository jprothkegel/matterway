import { createSlice } from '@reduxjs/toolkit';
import { openAmazon } from '../actions/amazonActions';

const amazonSlice = createSlice({
  name: 'amazon',
  initialState: {
    status: 'idle',
  },
  reducers: {
    resetAmazon(state) {
      state.status = 'idle';
    },
  },
  extraReducers: {
    [openAmazon.pending]: (state) => {
      state.status = 'loading';
    },
    [openAmazon.rejected]: (state) => {
      state.status = 'error';
    },
    [openAmazon.fulfilled]: (state) => {
      state.status = 'succeded';
    },
  },
});

export const { resetAmazon } = amazonSlice.actions;
export default amazonSlice.reducer;
