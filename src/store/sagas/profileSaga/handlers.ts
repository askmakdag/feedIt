import {call, put} from 'redux-saga/effects';
import ProfileService from '../../../services/profileService';
import {getProfileFailure, setProfile} from '../../states/profileState';
import {push} from '../../../navigagtion/RootNavigation';

export function* fetchProfileFeed(action: {payload: number}) {
  try {
    const {data} = yield call(ProfileService.getProfile, action.payload);
    yield call(ProfileService.getProfile, action.payload);
    yield put(setProfile(data[0]));
    yield call(push, 'Profile');
  } catch (e) {
    yield put(getProfileFailure());
  }
}
