import { fork } from 'redux-saga/effects';
import { startAppSaga } from './startApp';

export function* sagas(): Generator {
  yield fork(startAppSaga);
}
