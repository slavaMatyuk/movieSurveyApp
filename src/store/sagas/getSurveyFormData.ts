import { Effect, put, call, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { SurveyService } from '@services/surveyService';
import { getSurveyFormDataAction } from '@store/actions/getSurveyFormData';

export class GetSurveyFormDataSagaWorker {
  static *getSurveyFormData() {
    try {
      const response: SagaReturnType<typeof SurveyService.getSurveyFormData> = yield call(
        SurveyService.getSurveyFormData,
      );
      yield put(getSurveyFormDataAction.success(response));
    } catch (error: any) {
      yield put(getSurveyFormDataAction.failure(error));
    }
  }
}

export function* getSurveyFormDataSaga(): Generator<Effect, void> {
  yield takeLatest(getSurveyFormDataAction.request, GetSurveyFormDataSagaWorker.getSurveyFormData);
}
