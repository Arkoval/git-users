import { Reducer } from "redux";
import { ActionType } from "../action-types";
import { ActionRepos } from "../actions";

interface IState {
  pending: boolean;
  repos: string[];
  error: string | null | unknown;
}

const initialState: IState = {
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
