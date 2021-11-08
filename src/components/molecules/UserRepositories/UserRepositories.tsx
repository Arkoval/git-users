import { Spinner } from "components/atoms/Spinner/Spinner";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "store";
import { RootState } from "store/reducers";
import { StyledList, Wrapper } from "./UserRepositories.styles";
import { IRepo } from "./UserRepositories.types";

export const UserRepositories = ({ user, repoNum }: IRepo): ReactElement => {
  const state = useSelector((state: RootState) => state.userRepos);
  const dispatch = useDispatch();

  const { fetchRepos } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (user) {
      fetchRepos(user);
    }
  }, [user]);

  return (
    <Wrapper>
      <h3>
        Repositories count: <span>{repoNum ? repoNum : 0}</span>
      </h3>
      <h3>Repositories list:</h3>
      <StyledList>
        {state.pending ? (
          <Spinner />
        ) : (
          state.repos.map((repo: { name: string }) => (
            <li key={repo.name}>{repo.name}</li>
          ))
        )}
      </StyledList>
    </Wrapper>
  );
};
