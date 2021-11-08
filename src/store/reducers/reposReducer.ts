import { Reducer } from "redux";
import { IReducerState } from "types/reducers";
import { ActionType } from "../action-types";
import { ActionRepos } from "../actions";

const initialState: IReducerState | { repos: string[] } = {
  pending: false,
  repos: [],
  error: null,
};

const reposReducer: Reducer = (state = initialState, action: ActionRepos) => {
  switch (action.type) {
    case ActionType.FETCH_REPOS_INIT:
      return {
        ...state,
        pending: true,
      };
    case ActionType.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        pending: false,
        repos: action.payload,
      };
    case ActionType.FETCH_REPOS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reposReducer;
