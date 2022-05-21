import {takeLatest} from 'redux-saga/effects';
import {fetchPostFeed} from './handlers';

export function* fetchPostFeedWatcher() {
  yield takeLatest('feed/getFeedFetch', fetchPostFeed);
}
