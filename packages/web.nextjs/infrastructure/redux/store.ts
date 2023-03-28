import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './index';

export const store = () => {
  const middlewares = [createSagaMiddleware()];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    // devTools: process.env.NEXT_PUBLIC_NODE_ENV === 'development',
    devTools: process.env.NODE_ENV === 'development',
  });
};
const wrapper = createWrapper(store, {
  // debug: process.env.NEXT_PUBLIC_NODE_ENV === 'development',
  // debug: process.env.NODE_ENV === 'development',
  debug: false,
});

export default wrapper;
