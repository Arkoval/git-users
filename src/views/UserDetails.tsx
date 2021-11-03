import axios from "axios";
import { Heading } from "components/atoms/Heading/Heading";
import { UserCard } from "components/molecules/UserCard/UserCard";
import { UserRepositories } from "components/molecules/UserRepositories/UserRepositories";
import { useUsers } from "hooks/useUsers";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IGithub } from "types/github";
import { StyledHeading, UserWrapper, Wrapper } from "./UserDetails.styles";

interface IUser {
  id: number;
  login: string;
  name: string;
  url: string;
  avatar_url: string;
  public_repos: number;
}

export const UserDetails = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [repos, setRepos] = useState<string[]>([]);
  const { username } = useParams<{ username: string }>();
  const { getUserDetails, getUserRepos } = useUsers();

  useEffect(() => {
    (async () => {
      const data = await getUserDetails(username);
      setUser(data);
    })();
    (async () => {
      const data = await getUserRepos(username);
      setRepos(data);
    })();
  }, []);

  return (
    <Wrapper>
      <Heading isBold>Profile</Heading>
      {user !== null ? (
        <UserWrapper>
          <UserCard
            id={user.id}
            key={user.login}
            name={user.name}
            login={user.login}
            thumbnail={user.avatar_url}
            link={user.url}
          />
          <StyledHeading>Repositories</StyledHeading>
          <UserRepositories repos={repos} repoNum={user.public_repos} />
        </UserWrapper>
      ) : (
        <span>Loading data</span>
      )}
    </Wrapper>
  );
};
