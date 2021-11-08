import { Reducer } from "redux";
import { IReducerState } from "types/reducers";
import { ActionType } from "../action-types";
import { ActionDetails } from "../actions";

const initialState: IReducerState | { userDetails: string[] } = {
  pending: false,
  userDetails: [],
  error: null,
};

const detailsReducer: Reducer = (
  state = initialState,
  action: ActionDetails
) => {
  switch (action.type) {
    case ActionType.FETCH_DETAILS_INIT:
      return {
        ...state,
        pending: true,
      };
    case ActionType.FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        userDetails: action.payload,
      };
    case ActionType.FETCH_DETAILS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailsReducer;
