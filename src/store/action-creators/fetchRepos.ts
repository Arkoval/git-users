import { Dispatch } from "react";
import { ActionType } from "store/action-types";
import { ActionRepos } from "store/actions";

export const fetchReposInit = () => {
  return (dispatch: Dispatch<ActionRepos>) => {
    dispatch({
      type: ActionType.FETCH_REPOS_INIT,
    });
  };
};

export const fetchReposSuccess = (repos: string[]) => {
  return (dispatch: Dispatch<ActionRepos>) => {
    dispatch({
      type: ActionType.FETCH_REPOS_SUCCESS,
      payload: repos,
    });
  };
};

export const fetchReposFailure = (error: unknown) => {
  return (dispatch: Dispatch<ActionRepos>) => {
    dispatch({
      type: ActionType.FETCH_REPOS_FAILURE,
      payload: error,
    });
  };
};
