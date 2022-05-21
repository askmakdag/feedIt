import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import feedReducer from './feedState';
import {rootSaga} from './sagas';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);
