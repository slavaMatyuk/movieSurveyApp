import { createReducer } from 'typesafe-actions';
import { GetSurveyFormData } from '@models/GetSurveyFormData';
import { ServerErrorResponse } from '@models/ServerErrorResponse';
import { getSurveyFormDataAction, GetSurveyFormDataActionUnion } from '@store/actions/getSurveyFormData';

export interface GetSurveyFormDataState {
  initialForm: GetSurveyFormData | null;
  loading: boolean;
  initialError: ServerErrorResponse | null;
}

export const initialState: GetSurveyFormDataState = {
  initialForm: null,
  loading: false,
  initialError: null,
};

export const getSurveyFormDataReducer = createReducer<GetSurveyFormDataState, GetSurveyFormDataActionUnion>(
  initialState,
)
  .handleAction(getSurveyFormDataAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getSurveyFormDataAction.success, (state, action) => ({
    ...state,
    loading: false,
    initialForm: action.payload,
  }))
  .handleAction(getSurveyFormDataAction.failure, (state, action) => ({
    ...state,
    loading: false,
    initialError: action.payload,
  }));
