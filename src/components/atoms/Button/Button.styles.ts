import styled from "styled-components";

export const StyledButton = styled.a`
  color: ${({ theme }) => theme.colors.button};
  text-decoration: none;
  display: inline-block;
  padding: 12px 0;
  text-align: center;
  font-weight: 500;
`;
