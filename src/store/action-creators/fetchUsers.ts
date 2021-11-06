import { Dispatch } from "react";
import { ActionType } from "store/action-types";
import { ActionUsers } from "store/actions";

export const fetchUsersInit = () => {
  return (dispatch: Dispatch<ActionUsers>) => {
    dispatch({
      type: ActionType.FETCH_USERS_INIT,
    });
  };
};

export const fetchUsersSuccess = (users: string[]) => {
  return (dispatch: Dispatch<ActionUsers>) => {
    dispatch({
      type: ActionType.FETCH_USERS_SUCCESS,
      payload: users,
    });
  };
};

export const fetchUsersFailure = (error: unknown) => {
  return (dispatch: Dispatch<ActionUsers>) => {
    dispatch({
      type: ActionType.FETCH_USERS_FAILURE,
      payload: error,
    });
  };
};
