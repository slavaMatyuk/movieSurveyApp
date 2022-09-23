import { createSelector } from 'reselect';
import { AppState } from '../reducers';

export const getSurveyFormDataStateSelector = (state: AppState) => state.getSurveyFormData;

export const initialFormSelector = createSelector(getSurveyFormDataStateSelector, (state) => state.initialForm);

export const initialFormErrorSelector = createSelector(getSurveyFormDataStateSelector, (state) => state.initialError);
