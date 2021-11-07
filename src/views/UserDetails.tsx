import axios from "axios";
import { Heading } from "components/atoms/Heading/Heading";
import { Spinner } from "components/atoms/Spinner/Spinner";
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
  const { username } = useParams<{ username: string }>();
  const dispatch = useDispatch();

  const { fetchDetails } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (!user.login) {
      fetchDetails(username);
    }
  }, []);

  return (
    <Wrapper>
      <Heading isBold>Profile</Heading>
      {!user.login ? (
        <Spinner />
      ) : (
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
          <UserRepositories user={user.login} repoNum={user.public_repos} />
        </UserWrapper>
      )}
    </Wrapper>
  );
};
