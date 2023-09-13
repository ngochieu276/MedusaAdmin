import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './reducer/layout';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export interface ForkedTaskAPI {
  pause<W>(waitFor: Promise<W>): Promise<W>;
  delay(timeoutMs: number): Promise<void>;
  signal: AbortSignal;
}
