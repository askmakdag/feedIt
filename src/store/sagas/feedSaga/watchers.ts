import {takeLatest} from 'redux-saga/effects';
import {addMoreFeed, fetchPostFeed} from './handlers';

export function* fetchPostFeedWatcher() {
  yield takeLatest('feed/getFeedFetch', fetchPostFeed);
}
export function* getAddFeedWatcher() {
  yield takeLatest('feed/getAddFeed', addMoreFeed);
}
