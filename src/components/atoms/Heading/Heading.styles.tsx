import styled from "styled-components";

type isBold = {
  readonly isBold?: boolean;
};

export const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ isBold }: isBold) => (isBold ? "700" : "400")};
`;
