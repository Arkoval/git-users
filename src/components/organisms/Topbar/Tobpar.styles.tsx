import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 20px 0;
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -50vw;
    width: 150vw;
    background: ${({ theme }) => theme.colors.white};
    height: 100%;
    z-index: 0;
  }
  a {
    z-index: 1;
    margin-right: auto;
  }
`;
