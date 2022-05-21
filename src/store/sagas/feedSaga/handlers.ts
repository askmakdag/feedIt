import {put} from 'redux-saga/effects';
import {setFeed} from '../../feedState';

export function* fetchPostFeed() {
  const fetchedFeed = [1, 2, 4];
  yield put(setFeed(fetchedFeed));
}
