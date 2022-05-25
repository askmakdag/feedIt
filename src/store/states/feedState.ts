import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {PostModel} from '../../models/feed';

// Define a type for the slice state
interface FeedSlice {
  feed: Array<PostModel>;
  page: number;
  isLoading: boolean;
  isLoadingMore: boolean;
}

// Define the initial state using that type
const initialState: FeedSlice = {
  feed: [],
  page: 1,
  isLoading: false,
  isLoadingMore: false,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    getFeedFetch: state => {
      state.isLoading = true;
    },
    setFeed: (state, action: PayloadAction<Array<PostModel>>) => {
      state.feed = action.payload;
      state.isLoading = false;
      state.page = 2;
    },
    getAddFeed: state => {
      state.isLoadingMore = true;
    },
    addFeed: (state, action: PayloadAction<Array<PostModel>>) => {
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

// Other code such as selectors can use the imported `RootState` type
export const selectFeed = (state: RootState) => state.feed.feed;
export const selectIsLoading = (state: RootState) => state.feed.isLoading;

export default feedSlice.reducer;
