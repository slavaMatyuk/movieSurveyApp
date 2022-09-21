import { fork } from 'redux-saga/effects';
import { startAppSaga } from './startApp';
import { submitVoteSaga } from './submitVote';

export function* sagas(): Generator {
  yield fork(startAppSaga);
  yield fork(submitVoteSaga);
}
