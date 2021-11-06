import githubService from "GithubService/GithubService";
import { ThunkDispatch } from "redux-thunk";
import { IGithub } from "types/github";
import { ActionDetails, ActionRepos, ActionUsers } from "../actions";
import {
  fetchDetailsFailure,
  fetchDetailsInit,
  fetchDetailsSuccess,
} from "./fetchDetails";
import {
  fetchReposFailure,
  fetchReposInit,
  fetchReposSuccess,
} from "./fetchRepos";
import {
  fetchUsersFailure,
  fetchUsersInit,
  fetchUsersSuccess,
} from "./fetchUsers";

export const fetchUsers = () => {
  return async (dispatch: ThunkDispatch<IGithub, void, ActionUsers>) => {
    dispatch(fetchUsersInit());
    try {
      const res = await githubService.getUsers();
      dispatch(fetchUsersSuccess(res));
    } catch (err) {
      dispatch(fetchUsersFailure(err));
    }
  };
};
export const fetchDetails = (username: string) => {
  return async (dispatch: ThunkDispatch<IGithub, void, ActionDetails>) => {
    dispatch(fetchDetailsInit());
    try {
      const res = await githubService.getDetails(username);
      dispatch(fetchDetailsSuccess(res));
    } catch (err) {
      dispatch(fetchDetailsFailure(err));
    }
  };
};
export const fetchRepos = (username: string) => {
  return async (dispatch: ThunkDispatch<IGithub, void, ActionRepos>) => {
    dispatch(fetchReposInit());
    try {
      const res = await githubService.getRepos(username);
      dispatch(fetchReposSuccess(res));
    } catch (err) {
      dispatch(fetchReposFailure(err));
    }
  };
};
