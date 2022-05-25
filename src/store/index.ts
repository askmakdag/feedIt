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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
