import { put, takeLatest } from 'redux-saga/effects';
import { startAppAction } from '@store/actions/startApp';

export class StartAppSagaWorker {
  static *start() {
    try {
      yield put(startAppAction.success());
    } catch (error: any) {
      yield put(startAppAction.failure({ error: error.message }));
    }
  }
}

export function* startAppSaga() {
  yield takeLatest(startAppAction.request, StartAppSagaWorker.start);
}
