import { fork } from 'redux-saga/effects';
import { getResponseSaga } from './getResponse';
import { startAppSaga } from './startApp';
import { submitVoteSaga } from './submitVote';

export function* sagas(): Generator {
  yield fork(startAppSaga);
  yield fork(getResponseSaga);
  yield fork(submitVoteSaga);
}
