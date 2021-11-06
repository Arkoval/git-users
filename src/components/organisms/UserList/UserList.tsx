import { Button } from "components/atoms/Button/Button";
import { UserCard } from "components/molecules/UserCard/UserCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "store";
import { RootState } from "store/reducers";
import { IGithub } from "types/github";
import { CardWrapper, Wrapper } from "./UserList.styles";

export const UserList = ({
  users,
}: {
  users: IGithub[];
}): React.ReactElement => {
  // const { user } = useSelector((state: RootState) => state.userDetails);
  // const dispatch = useDispatch();

  // const { fetchDetails } = bindActionCreators(actionCreators, dispatch);

  return (
    <Wrapper>
      {users.map((user) => {
        return (
          <CardWrapper key={user.login}>
            <UserCard
              id={user.id}
              login={user.login}
              thumbnail={user.avatar_url}
              link={user.url}
            />
            {/* <button onClick={() => fetchDetails(user.login)}>test</button> */}
            <Link to={`/users/${user.login}`}>test</Link>
            {/* <Button to={`/users/${user.login}`}>Details</Button> */}
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
};
