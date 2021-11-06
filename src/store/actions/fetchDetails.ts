import { ActionType } from "../action-types";

export interface FetchDetailsInit {
  type: ActionType.FETCH_DETAILS_INIT;
}

export interface FetchDetailsSuccess {
  type: ActionType.FETCH_DETAILS_SUCCESS;
  payload: string[];
}

export interface FetchDetailsFailure {
  type: ActionType.FETCH_DETAILS_FAILURE;
  payload: unknown;
}
