import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.gray};
`;
