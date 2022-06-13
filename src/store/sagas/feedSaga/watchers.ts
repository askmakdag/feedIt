import {takeLatest} from 'redux-saga/effects';
import {addMoreFeed, fetchPostFeed} from './handlers';
import {getAddFeed, getFeedFetch} from '../../states/feedState';

export function* fetchPostFeedWatcher() {
  yield takeLatest(getFeedFetch, fetchPostFeed);
}

export function* getAddFeedWatcher() {
  yield takeLatest(getAddFeed, addMoreFeed);
}
