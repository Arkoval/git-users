import { ActionType } from "../action-types";

export interface FetchReposInit {
  type: ActionType.FETCH_REPOS_INIT;
}

export interface FetchReposSuccess {
  type: ActionType.FETCH_REPOS_SUCCESS;
  payload: string[];
}

export interface FetchReposFailure {
  type: ActionType.FETCH_REPOS_FAILURE;
  payload: unknown;
}
