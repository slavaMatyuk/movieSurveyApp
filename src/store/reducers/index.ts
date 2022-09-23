import { combineReducers } from '@reduxjs/toolkit';
import { getResponseReducer, GetResponseState } from './getResponse';
import { startAppReducer, StartAppState } from './startApp';
import { submitVoteReducer, SubmitVoteState } from './submitVote';

export interface AppState {
  startApp: StartAppState;
  getResponse: GetResponseState;
  submitVote: SubmitVoteState;
}

export const rootReducer = combineReducers({
  startApp: startAppReducer,
  getResponse: getResponseReducer,
  submitVote: submitVoteReducer,
});

export type State = ReturnType<typeof rootReducer>;
