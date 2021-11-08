import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  display: inline-block;
  padding: 12px 0;
  text-align: center;
  font-weight: 500;
  transition: 0.3s ease-in;

  @media screen and (min-width: 1200px) {
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
