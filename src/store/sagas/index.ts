import { fork } from 'redux-saga/effects';
import { getSurveyFormDataSaga } from './getSurveyFormData';
import { startAppSaga } from './startApp';
import { submitVoteSaga } from './submitVote';

export function* sagas(): Generator {
  yield fork(startAppSaga);
  yield fork(getSurveyFormDataSaga);
  yield fork(submitVoteSaga);
}
