import { Badge } from "components/atoms/Badge/Badge";
import React from "react";
import { ReactComponent as Icon } from "assets/icons/github.svg";
import {
  ImageContainer,
  InnerWrapper,
  LogoLink,
  StyledHeading,
  Wrapper,
} from "./UserCard.styles";

interface IUser {
  id: number;
  login: string;
  name?: string;
  link: string;
  thumbnail: string;
}

export const UserCard = ({
  id,
  login,
  name,
  link,
  thumbnail,
}: IUser): React.ReactElement => {
  return (
    <Wrapper hasDetails={!!name}>
      <ImageContainer isBig={!!name}>
        <img src={thumbnail} />
      </ImageContainer>
      <InnerWrapper>
        {name && (
          <StyledHeading>
            <strong>{name}</strong>
          </StyledHeading>
        )}
        <h4>@{login}</h4>
        <div className="user-info">
          <Badge id={id} />
          <p>ID: #{id}</p>
        </div>
        <LogoLink href={link} target="_blank">
          <Icon />
          GitHub page
        </LogoLink>
      </InnerWrapper>
    </Wrapper>
  );
};
