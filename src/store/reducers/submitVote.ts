import { createReducer } from 'typesafe-actions';
import { submitVoteAction, SubmitVoteActionUnion } from '@store/actions/submitVote';
import { SubmitVoteRequest } from '@models/SubmitVoteRequest';

export interface SubmitVoteState {
  loading: boolean;
  submitVote: SubmitVoteRequest | null;
  submitFilmError: string | null;
  submitReviewError: string | null;
}

export const initialState: SubmitVoteState = {
  loading: false,
  submitVote: null,
  submitFilmError: null,
  submitReviewError: null,
};

export const submitVoteReducer = createReducer<SubmitVoteState, SubmitVoteActionUnion>(initialState)
  .handleAction(submitVoteAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(submitVoteAction.success, (state, action) => ({
    ...state,
    loading: false,
    submitVote: action.payload,
    submitFilmError: initialState.submitFilmError,
    submitReviewError: initialState.submitReviewError,
  }))
  .handleAction(submitVoteAction.failure, (state, action) => ({
    ...state,
    loading: false,
    submitFilmError: action.payload.errors[0].detail,
    submitReviewError: action.payload.errors[1].detail,
  }));
