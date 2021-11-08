import { ReactElement } from "react";
import { StyledHeading } from "./Heading.styles";
import { HeadingProps } from "./Heading.types";

export const Heading = ({
  isBold = false,
  children,
}: HeadingProps): ReactElement => (
  <StyledHeading isBold={isBold}>{children}</StyledHeading>
);
