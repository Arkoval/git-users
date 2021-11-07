import { Reducer } from "redux";
import { ActionType } from "../action-types";
import { ActionUsers } from "../actions";

interface IState {
  pending: boolean;
  users: string[];
  error: string | null | unknown;
}

const initialState: IState = {
  pending: false,
  users: [],
  error: null,
};

const usersReducer: Reducer = (state = initialState, action: ActionUsers) => {
  switch (action.type) {
    case ActionType.FETCH_USERS_INIT:
      return {
        ...state,
        pending: true,
      };
    case ActionType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload,
      };
    case ActionType.FETCH_USERS_UPDATE:
      console.log(state.users);
      return {
        ...state,
        pending: false,
        users: [...state.users, ...action.payload],
      };
    case ActionType.FETCH_USERS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
