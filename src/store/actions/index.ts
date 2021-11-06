import {
  FetchDetailsFailure,
  FetchDetailsInit,
  FetchDetailsSuccess,
} from "./fetchDetails";
import {
  FetchReposFailure,
  FetchReposInit,
  FetchReposSuccess,
} from "./fetchRepos";
import {
  FetchUsersFailure,
  FetchUsersInit,
  FetchUsersSuccess,
} from "./fetchUsers";

export type ActionUsers =
  | FetchUsersInit
  | FetchUsersSuccess
  | FetchUsersFailure;

export type ActionDetails =
  | FetchDetailsInit
  | FetchDetailsSuccess
  | FetchDetailsFailure;

export type ActionRepos =
  | FetchReposInit
  | FetchReposSuccess
  | FetchReposFailure;
