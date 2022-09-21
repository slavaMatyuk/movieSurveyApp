import { createAsyncAction, ActionType } from 'typesafe-actions';

export enum SubmitVoteTypes {
  SubmitVote = '[SubmitVote] StartApp',
  SubmitVoteSuccess = '[SubmitVote] SubmitVoteSuccess',
  SubmitVoteFailed = '[SubmitVote] SubmitVoteFailed',
}

export const submitVoteAction = createAsyncAction(
  SubmitVoteTypes.SubmitVote,
  SubmitVoteTypes.SubmitVoteSuccess,
  SubmitVoteTypes.SubmitVoteFailed,
)<void, void, Error>();

export type SubmitVoteActionUnion = ActionType<typeof submitVoteAction>;
