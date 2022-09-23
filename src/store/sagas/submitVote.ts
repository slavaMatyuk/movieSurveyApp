import { SurveyService } from '@services/surveyService';
import { call, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { submitVoteAction } from '@store/actions/submitVote';
import { Navigator } from '@services/navigatorService';
import { RouteNames } from '@constants/routeNames';
import { ActionType } from 'typesafe-actions';

export class SubmitVoteSagaWorker {
  static *submitVote({ payload }: ActionType<typeof submitVoteAction.request>) {
    try {
      const response: SagaReturnType<typeof SurveyService.submitVote> = yield call(
        SurveyService.submitVote as any,
        payload.data,
        payload.id,
      );
      yield put(submitVoteAction.success(response));
      Navigator.push(RouteNames.RESULT);
    } catch (error: any) {
      yield put(submitVoteAction.failure(error));
    }
  }
}

export function* submitVoteSaga() {
  yield takeLatest(submitVoteAction.request, SubmitVoteSagaWorker.submitVote);
}
