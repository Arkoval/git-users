import axios from "axios";
import { Heading } from "components/atoms/Heading/Heading";
import { UserCard } from "components/molecules/UserCard/UserCard";
import { UserRepositories } from "components/molecules/UserRepositories/UserRepositories";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { bindActionCreators } from "redux";
import { actionCreators } from "store";
import { RootState } from "store/reducers";
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
  const { userDetails: user } = useSelector(
    (state: RootState) => state.userDetails
  );
  const { userRepos: repos } = useSelector(
    (state: RootState) => state.userRepos
  );
  const { username } = useParams<{ username: string }>();
  const dispatch = useDispatch();

  const { fetchDetails, fetchRepos } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    fetchDetails(username);
  }, []);
  return (
    <Wrapper>
      <Heading isBold>Profile</Heading>
      <button onClick={() => fetchDetails(username)}>teste</button>
      {user ? (
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
          {/* <UserRepositories repos={repos} repoNum={user.public_repos} /> */}
        </UserWrapper>
      ) : (
        <span>Loading data</span>
      )}
    </Wrapper>
  );
};
