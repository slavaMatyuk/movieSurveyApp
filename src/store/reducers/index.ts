import { combineReducers } from '@reduxjs/toolkit';
import { getSurveyFormDataReducer, GetSurveyFormDataState } from './getSurveyFormData';
import { startAppReducer, StartAppState } from './startApp';
import { submitVoteReducer, SubmitVoteState } from './submitVote';

export interface AppState {
  startApp: StartAppState;
  getSurveyFormData: GetSurveyFormDataState;
  submitVote: SubmitVoteState;
}

export const rootReducer = combineReducers({
  startApp: startAppReducer,
  getSurveyFormData: getSurveyFormDataReducer,
  submitVote: submitVoteReducer,
});

export type State = ReturnType<typeof rootReducer>;
