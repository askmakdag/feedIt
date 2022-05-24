import {all, call, spawn} from 'redux-saga/effects';
import {fetchPostFeedWatcher, getAddFeedWatcher} from './feedSaga/watchers';
import {fetchProfileFeedWatcher} from './profileSaga/watchers';

export function* rootSaga() {
  const feedSagas = [fetchPostFeedWatcher, getAddFeedWatcher];
  const profileSagas = [fetchProfileFeedWatcher];

  yield all(
    [...feedSagas, ...profileSagas].map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {}
        }
      }),
    ),
  );
}
