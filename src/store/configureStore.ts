/**
 * Create the store with dynamic reducers
 */

import {
  PreloadedState,
  StoreEnhancer,
  configureStore,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducers';
import { RootState } from '../types/RootState';

export function configureAppStore(preloadedState?: PreloadedState<RootState>) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: createReducer(),
    preloadedState,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({}),
      ...middlewares,
    ],
    enhancers,
  });

  return store;
}

export type AppStore = ReturnType<typeof configureAppStore>;
