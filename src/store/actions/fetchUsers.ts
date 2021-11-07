import { ActionType } from "../action-types";

export interface FetchUsersInit {
  type: ActionType.FETCH_USERS_INIT;
}

export interface FetchUsersSuccess {
  type: ActionType.FETCH_USERS_SUCCESS;
  payload: string[];
}
export interface FetchUsersUpdate {
  type: ActionType.FETCH_USERS_UPDATE;
  payload: string[];
}
export interface FetchUsersFailure {
  type: ActionType.FETCH_USERS_FAILURE;
  payload: unknown;
}
