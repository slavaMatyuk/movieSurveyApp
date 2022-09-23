import { startAppAction } from '@store/actions/startApp';
import { Effect, put, takeLatest } from 'redux-saga/effects';

export class StartAppSagaWorker {
  static *start() {
    try {
      yield put(startAppAction.success());
    } catch (error: any) {
      yield put(startAppAction.failure({ error: error.message }));
    }
  }
}

export function* startAppSaga(): Generator<Effect, void> {
  yield takeLatest(startAppAction.request, StartAppSagaWorker.start);
}
