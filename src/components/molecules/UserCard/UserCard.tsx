import { Badge } from "components/atoms/Badge/Badge";
import { ReactElement } from "react";
import { ReactComponent as Icon } from "assets/icons/github.svg";
import {
  ImageContainer,
  InnerWrapper,
  LogoLink,
  StyledHeading,
  Wrapper,
} from "./UserCard.styles";
import { IUser } from "./UserCard.types";

export const UserCard = ({
  id,
  login,
  name,
  link,
  thumbnail,
}: IUser): ReactElement => {
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
        <LogoLink href={link}>
          <Icon />
          GitHub page
        </LogoLink>
      </InnerWrapper>
    </Wrapper>
  );
};
