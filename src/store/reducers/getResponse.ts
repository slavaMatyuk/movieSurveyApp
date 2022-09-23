import { createReducer } from 'typesafe-actions';
import { GetResponse } from '@models/GetResponse';
import { ServerErrorResponse } from '@models/ServerErrorResponse';
import { getResponseAction, GetResponseActionUnion } from '@store/actions/getResponse';

export interface GetResponseState {
  initialForm: GetResponse | null;
  loading: boolean;
  initialError: ServerErrorResponse | null;
}

export const initialState: GetResponseState = {
  initialForm: null,
  loading: false,
  initialError: null,
};

export const getResponseReducer = createReducer<GetResponseState, GetResponseActionUnion>(initialState)
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
