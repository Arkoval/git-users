import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";
import reposReducer from "./reposReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  users: usersReducer,
  userDetails: detailsReducer,
  userRepos: reposReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
