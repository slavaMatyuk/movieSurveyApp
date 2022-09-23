import { createAsyncAction, ActionType } from 'typesafe-actions';
import { GetSurveyFormData } from '@models/GetSurveyFormData';
import { ServerErrorResponse } from '@models/ServerErrorResponse';

export enum GetSurveyFormDataTypes {
  GetSurveyFormData = '[GetSurveyFormData] GetSurveyFormData',
  GetSurveyFormDataSuccess = '[GetSurveyFormData] GetSurveyFormDataSuccess',
  GetSurveyFormDataFailed = '[GetSurveyFormData] GetSurveyFormDataFailed',
}

export const getSurveyFormDataAction = createAsyncAction(
  GetSurveyFormDataTypes.GetSurveyFormData,
  GetSurveyFormDataTypes.GetSurveyFormDataSuccess,
  GetSurveyFormDataTypes.GetSurveyFormDataFailed,
)<undefined, GetSurveyFormData, ServerErrorResponse>();

export type GetSurveyFormDataActionUnion = ActionType<typeof getSurveyFormDataAction>;
