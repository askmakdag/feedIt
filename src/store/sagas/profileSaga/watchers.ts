import {takeLatest} from 'redux-saga/effects';
import {fetchProfileFeed} from './handlers';
import {getProfileFetch} from '../../states/profileState';

export function* fetchProfileFeedWatcher() {
  yield takeLatest(getProfileFetch, fetchProfileFeed);
}
