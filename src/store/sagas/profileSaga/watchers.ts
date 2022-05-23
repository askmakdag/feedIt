import {takeLatest} from 'redux-saga/effects';
import {fetchProfileFeed} from './handlers';

export function* fetchProfileFeedWatcher() {
  yield takeLatest('profile/getProfileFetch', fetchProfileFeed);
}
