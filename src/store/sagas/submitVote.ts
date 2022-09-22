import { put, takeLatest } from 'redux-saga/effects';
import { submitVoteAction } from '@store/actions/submitVote';
import { Navigator } from '@services/navigatorService';
import { RouteNames } from '@constants/routeNames';

export class SubmitVoteSagaWorker {
  static *submitVote() {
    try {
      yield put(submitVoteAction.success());
      Navigator.push(RouteNames.RESULT);
    } catch (error: any) {
      yield put(submitVoteAction.failure(error));
    }
  }
}

export function* submitVoteSaga() {
  yield takeLatest(submitVoteAction.request, SubmitVoteSagaWorker.submitVote);
}
