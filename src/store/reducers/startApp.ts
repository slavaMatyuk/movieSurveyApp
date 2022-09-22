import { createReducer } from 'typesafe-actions';
import { GetResponse } from '@models/GetResponse';
import { ServerErrorResponse } from '@models/ServerErrorResponse';
import { getResponseAction, startAppAction, StartAppActionUnion } from '@store/actions/startApp';

export interface StartAppState {
  appReady: boolean;
  initialForm: GetResponse | null;
  loading: boolean;
  initialError: ServerErrorResponse | null;
}

export const initialState: StartAppState = {
  appReady: false,
  initialForm: null,
  loading: false,
  initialError: null,
};

export const startAppReducer = createReducer<StartAppState, StartAppActionUnion>(initialState)
  .handleAction(startAppAction.success, (state) => ({
    ...state,
    appReady: true,
  }))

  .handleAction(getResponseAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getResponseAction.success, (state, action) => ({
    ...state,
    loading: false,
    initialForm: action.payload,
  }))
  .handleAction(getResponseAction.failure, (state, action) => ({
    ...state,
    loading: false,
    initialError: action.payload,
  }));
