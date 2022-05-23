import {createSlice} from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
    isLoading: false,
  },
  reducers: {
    getProfileFetch: state => {
      state.isLoading = true;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
      state.isLoading = false;
    },
    getProfileFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {getProfileFetch, setProfile, getProfileFailure} =
  profileSlice.actions;
export default profileSlice.reducer;
