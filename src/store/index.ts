import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import feedReducer from './states/feedState';
import profileReducer from './states/profileState';
import {rootSaga} from './sagas';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    profile: profileReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);
