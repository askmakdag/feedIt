import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProfileModel} from '../../models';

// Define a type for the slice state
interface ProfileSlice {
  profile: ProfileModel;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: ProfileSlice = {
  profile: {
    id: 0,
    name: '',
    username: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
    avatar: '',
    email: '',
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  },
  isLoading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfileFetch: (state, action: PayloadAction<number>) => {
      state.isLoading = true;
    },
    setProfile: (state, action: PayloadAction<ProfileModel>) => {
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
