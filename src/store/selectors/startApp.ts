import { createSelector } from 'reselect';
import { AppState } from '../reducers';

export const startAppStateSelector = (state: AppState) => state.startApp;

export const isAppReadySelector = createSelector(startAppStateSelector, (state) => state.appReady);

export const initialFormSelector = createSelector(startAppStateSelector, (state) => state.initialForm);

export const initialFormErrorSelector = createSelector(startAppStateSelector, (state) => state.initialError);
