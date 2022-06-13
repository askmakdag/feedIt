import {
  AnyAction,
  configureStore,
  Dispatch,
  Middleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import feedReducer from './states/feedState';
import profileReducer from './states/profileState';
import {rootSaga} from './sagas';

const saga = createSagaMiddleware();

const middleware: Middleware<any, any, Dispatch<AnyAction>>[] = [saga];

if (__DEV__) {
  middleware.push(logger);
}

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    profile: profileReducer,
  },
  middleware,
});

saga.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
