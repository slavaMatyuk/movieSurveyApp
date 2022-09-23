import { createAsyncAction, ActionType } from 'typesafe-actions';
import { SubmitResponse } from '@models/SubmitResponse';
import { SubmitVoteRequest } from '@models/SubmitVoteRequest';
import { SubmitErrorResponse } from '@models/SubmitErrorResponse';

export enum SubmitVoteTypes {
  SubmitVote = '[SubmitVote] StartApp',
  SubmitVoteSuccess = '[SubmitVote] SubmitVoteSuccess',
  SubmitVoteFailed = '[SubmitVote] SubmitVoteFailed',
}

export const submitVoteAction = createAsyncAction(
  SubmitVoteTypes.SubmitVote,
  SubmitVoteTypes.SubmitVoteSuccess,
  SubmitVoteTypes.SubmitVoteFailed,
)<SubmitVoteRequest, SubmitResponse, SubmitErrorResponse>();

export type SubmitVoteActionUnion = ActionType<typeof submitVoteAction>;
