import { Effect, put, call, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { SurverService } from '@services/surveyService';
import { getResponseAction } from '@store/actions/getResponse';

export class GetResponseSagaWorker {
  static *getResponse() {
    try {
      const response: SagaReturnType<typeof SurverService.getResponse> = yield call(SurverService.getResponse);
      yield put(getResponseAction.success(response));
    } catch (error: any) {
      yield put(getResponseAction.failure(error));
    }
  }
}

export function* getResponseSaga(): Generator<Effect, void> {
  yield takeLatest(getResponseAction.request, GetResponseSagaWorker.getResponse);
}
