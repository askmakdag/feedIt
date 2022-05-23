import {all, call, spawn} from 'redux-saga/effects';
import {fetchPostFeedWatcher} from './feedSaga/watchers';
import {fetchProfileFeedWatcher} from './profileSaga/watchers';

export function* rootSaga() {
  const feedSagas = [fetchPostFeedWatcher];
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
