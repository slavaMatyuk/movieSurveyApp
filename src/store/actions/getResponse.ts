import { createAsyncAction, ActionType } from 'typesafe-actions';
import { GetResponse } from '@models/GetResponse';
import { ServerErrorResponse } from '@models/ServerErrorResponse';

export enum GetResponseTypes {
  GetResponse = '[GetResponse] GetResponse',
  GetResponseSuccess = '[GetResponse] GetResponseSuccess',
  GetResponseFailed = '[GetResponse] GetResponseFailed',
}

export const getResponseAction = createAsyncAction(
  GetResponseTypes.GetResponse,
  GetResponseTypes.GetResponseSuccess,
  GetResponseTypes.GetResponseFailed,
)<undefined, GetResponse, ServerErrorResponse>();

export type GetResponseActionUnion = ActionType<typeof getResponseAction>;
