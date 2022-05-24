import {call, put, select} from 'redux-saga/effects';
import {getFeedFailure, setFeed, addFeed} from '../../states/feedState';
import FeedService from '../../../services/feedService';

export function* fetchPostFeed() {
  try {
    const {data} = yield call(FeedService.getPosts, 1);
    yield put(setFeed(data));
  } catch (e) {
    yield put(getFeedFailure());
  }
}

export function* addMoreFeed() {
  try {
    const {page} = yield select(s => s.feed);
    const {data} = yield call(FeedService.getPosts, page);
    yield put(addFeed(data));
  } catch (e) {
    yield put(getFeedFailure());
  }
}
