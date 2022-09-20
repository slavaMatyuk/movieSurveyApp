import { combineReducers } from '@reduxjs/toolkit';
import { startAppReducer, StartAppState } from './startApp';

export interface AppState {
  startApp: StartAppState;
}

export const rootReducer = combineReducers({
  startApp: startAppReducer,
});

export type State = ReturnType<typeof rootReducer>;
