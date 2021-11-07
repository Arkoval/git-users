import { ReactElement } from "react";
import { ReactComponent as Icon } from "assets/icons/github.svg";
import { Heading } from "components/atoms/Heading/Heading";
import { Wrapper } from "./LogoTitle.styles";

export const LogoTitle = ({ children }: { children: string }): ReactElement => {
  return (
    <Wrapper>
      <Icon />
      <Heading>{children}</Heading>
    </Wrapper>
  );
};
