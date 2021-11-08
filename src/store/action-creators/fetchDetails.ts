import { Dispatch } from "react";
import { ActionType } from "store/action-types";
import { ActionDetails } from "store/actions";

export const fetchDetailsInit = () => {
  return (dispatch: Dispatch<ActionDetails>): void => {
    dispatch({
      type: ActionType.FETCH_DETAILS_INIT,
    });
  };
};

export const fetchDetailsSuccess = (user: string[]) => {
  return (dispatch: Dispatch<ActionDetails>): void => {
    dispatch({
      type: ActionType.FETCH_DETAILS_SUCCESS,
      payload: user,
    });
  };
};

export const fetchDetailsFailure = (error: unknown) => {
  return (dispatch: Dispatch<ActionDetails>): void => {
    dispatch({
      type: ActionType.FETCH_DETAILS_FAILURE,
      payload: error,
    });
  };
};
