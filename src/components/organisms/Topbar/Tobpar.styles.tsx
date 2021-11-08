import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 20px 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
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
  div {
    grid-column: 2;
    place-self: center;
  }
  a {
    z-index: 1;
    margin-right: auto;
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
    grid-column: 1;

    @media screen and (min-width: 1200px) {
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
