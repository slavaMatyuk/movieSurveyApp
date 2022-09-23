import { createSelector } from 'reselect';
import { AppState } from '../reducers';

export const submitVoteStateSelector = (state: AppState) => state.submitVote;

export const loadingSelector = createSelector(submitVoteStateSelector, (state) => state.loading);
