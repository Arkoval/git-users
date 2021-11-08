import styled from "styled-components";
import { HeadingProps } from "./Heading.types";

export const StyledHeading = styled.h2<HeadingProps>`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ isBold }) => (isBold ? "700" : "400")};
`;
