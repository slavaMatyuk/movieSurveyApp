import { createAsyncAction, ActionType } from 'typesafe-actions';
import { Error } from '@models/common';
import { GetResponse } from '@models/GetResponse';
import { ServerErrorResponse } from '@models/ServerErrorResponse';

export enum StartAppTypes {
  StartApp = '[StartApp] StartApp',
  StartAppSuccess = '[StartApp] StartAppSuccess',
  StartAppFailed = '[StartApp] StartAppFailed',

  GetResponse = '[GetResponse] GetResponse',
  GetResponseSuccess = '[GetResponse] GetResponseSuccess',
  GetResponseFailed = '[GetResponse] GetResponseFailed',
}

export const startAppAction = createAsyncAction(
  StartAppTypes.StartApp,
  StartAppTypes.StartAppSuccess,
  StartAppTypes.StartAppFailed,
)<void, void, Error>();

export const getResponseAction = createAsyncAction(
  StartAppTypes.GetResponse,
  StartAppTypes.GetResponseSuccess,
  StartAppTypes.GetResponseFailed,
)<undefined, GetResponse, ServerErrorResponse>();

export type StartAppActionUnion = ActionType<typeof startAppAction> | ActionType<typeof getResponseAction>;
