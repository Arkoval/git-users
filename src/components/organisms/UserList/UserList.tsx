import { Button } from "components/atoms/Button/Button";
import { UserCard } from "components/molecules/UserCard/UserCard";
import { useObserver } from "hooks/useObserver";
import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "store";
import { IGithub } from "types/github";
import { CardWrapper, Wrapper } from "./UserList.styles";

export const UserList = ({
  users,
}: {
  users: IGithub[];
}): React.ReactElement => {
  const dispatch = useDispatch();
  const { container } = useObserver({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });
  const { fetchDetails } = bindActionCreators(actionCreators, dispatch);

  return (
    <Wrapper>
      {users.map((user) => {
        return (
          <CardWrapper ref={container} key={user.login}>
            <UserCard
              id={user.id}
              login={user.login}
              thumbnail={user.avatar_url}
              link={user.html_url}
            />
            <Button
              to={`/users/${user.login}`}
              onClick={() => fetchDetails(user.login)}
            >
              Details
            </Button>
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
};
