import {all, call, spawn} from 'redux-saga/effects';
import {fetchPostFeedWatcher} from './feedSaga/watchers';

export function* rootSaga() {
  const feedSagas = [fetchPostFeedWatcher];

  yield all(
    [...feedSagas].map(saga =>
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
