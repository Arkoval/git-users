import { StyledHeading } from "./Heading.styles";

type HeadingProps = {
  readonly isBold?: boolean;
  readonly children: string | number;
};

export const Heading = ({ isBold = false, children }: HeadingProps) => (
  <StyledHeading isBold={isBold}>{children}</StyledHeading>
);
