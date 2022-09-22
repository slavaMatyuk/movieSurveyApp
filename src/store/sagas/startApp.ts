import { Effect, put, call, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { getResponseAction, startAppAction } from '@store/actions/startApp';
import { SurverService } from '@services/surveyService';

export class StartAppSagaWorker {
  static *start() {
    try {
      yield put(startAppAction.success());
    } catch (error: any) {
      yield put(startAppAction.failure({ error: error.message }));
    }
  }

  static *getResponse() {
    try {
      const response: SagaReturnType<typeof SurverService.getResponse> = yield call(SurverService.getResponse);
      yield put(getResponseAction.success(response));
    } catch (error: any) {
      yield put(getResponseAction.failure(error));
    }
  }
}

export function* startAppSaga(): Generator<Effect, void> {
  yield takeLatest(startAppAction.request, StartAppSagaWorker.start);
  yield takeLatest(getResponseAction.request, StartAppSagaWorker.getResponse);
}
