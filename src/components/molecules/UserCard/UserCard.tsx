import { Badge } from "components/atoms/Badge/Badge";
import { Button } from "components/atoms/Button/Button";
import React from "react";
import { ReactComponent as Icon } from "assets/icons/github.svg";
import {
  Card,
  ImageContainer,
  InnerWrapper,
  LogoLink,
  Wrapper,
} from "./UserCard.styles";

interface IUser {
  id: number;
  login: string;
  link: string;
  thumbnail: string;
  getDetails: () => void;
}

export const UserCard = ({
  id,
  login,
  link,
  thumbnail,
  getDetails,
}: IUser): React.ReactElement => {
  return (
    <Card>
      <Wrapper>
        <ImageContainer>
          <img src={thumbnail} />
        </ImageContainer>
        <InnerWrapper>
          <h3>{login}</h3>
          <div className="user-info">
            <Badge id={id} />
            <p>ID: #2</p>
          </div>
          <LogoLink href="#!">
            <Icon />
            GitHub page
          </LogoLink>
        </InnerWrapper>
      </Wrapper>
      <Button to={link}>Details</Button>
    </Card>
  );
};
