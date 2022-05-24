import {createSlice} from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    feed: [],
    page: 1,
    isLoading: false,
    isLoadingMore: false,
  },
  reducers: {
    getFeedFetch: state => {
      state.isLoading = true;
    },
    setFeed: (state, action) => {
      state.feed = action.payload;
      state.isLoading = false;
      state.page = 2;
    },
    getAddFeed: state => {
      state.isLoadingMore = true;
    },
    addFeed: (state, action) => {
      state.feed.push(...action.payload);
      state.isLoadingMore = false;
      state.page = state.page + 1;
    },
    getFeedFailure: state => {
      state.isLoading = false;
      state.isLoadingMore = false;
    },
  },
});

export const {getFeedFetch, setFeed, getAddFeed, addFeed, getFeedFailure} =
  feedSlice.actions;
export default feedSlice.reducer;
