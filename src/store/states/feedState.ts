import {createSlice} from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    feed: [],
    isLoading: false,
  },
  reducers: {
    getFeedFetch: state => {
      state.isLoading = true;
    },
    setFeed: (state, action) => {
      state.feed = action.payload;
      state.isLoading = false;
    },
    getFeedFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {getFeedFetch, setFeed, getFeedFailure} = feedSlice.actions;
export default feedSlice.reducer;
