import { Button } from "components/atoms/Button/Button";
import { UserCard } from "components/molecules/UserCard/UserCard";
import React from "react";
import { IGithub } from "types/github";
import { CardWrapper, Wrapper } from "./UserList.styles";

export const UserList = ({
  users,
}: {
  users: IGithub[];
}): React.ReactElement => {
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
            <Button to={`/users/${user.login}`}>Details</Button>
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
};
