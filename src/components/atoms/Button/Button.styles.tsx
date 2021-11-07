import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  color: ${({ theme }) => theme.colors.button};
  text-decoration: none;
  display: inline-block;
  padding: 12px 0;
  text-align: center;
  font-weight: 500;
`;
