import { createReducer } from 'typesafe-actions';
import { submitVoteAction, SubmitVoteActionUnion } from '@store/actions/submitVote';

export interface SubmitVoteState {
  loading: boolean;
  voteValue: number | null;
  error: string | null;
}

export const initialState: SubmitVoteState = {
  loading: false,
  voteValue: null,
  error: null,
};

export const submitVoteReducer = createReducer<SubmitVoteState, SubmitVoteActionUnion>(initialState)
  .handleAction(submitVoteAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(submitVoteAction.success, (state, action) => ({
    ...state,
    loading: false,
    voteValue: action.payload,
    error: initialState.error,
  }))
  .handleAction(submitVoteAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }));
