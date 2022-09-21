import { combineReducers } from '@reduxjs/toolkit';
import { startAppReducer, StartAppState } from './startApp';
import { submitVoteReducer, SubmitVoteState } from './submitVote';

export interface AppState {
  startApp: StartAppState;
  submitVote: SubmitVoteState;
}

export const rootReducer = combineReducers({
  startApp: startAppReducer,
  submitVote: submitVoteReducer,
});

export type State = ReturnType<typeof rootReducer>;
