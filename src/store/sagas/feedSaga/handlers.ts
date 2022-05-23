import {call, put} from 'redux-saga/effects';
import {setFeed} from '../../states/feedState';
import FeedService from '../../../services/feedService';

export function* fetchPostFeed() {
  try {
    const {data} = yield call(FeedService.getPosts, 1);
    yield put(setFeed(data));
  } catch (e) {}
}
