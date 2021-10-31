import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 30px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.black};
`;
