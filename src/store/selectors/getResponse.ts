import { createSelector } from 'reselect';
import { AppState } from '../reducers';

export const getResponseStateSelector = (state: AppState) => state.getResponse;

export const initialFormSelector = createSelector(getResponseStateSelector, (state) => state.initialForm);

export const initialFormErrorSelector = createSelector(getResponseStateSelector, (state) => state.initialError);
