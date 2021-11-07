import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
export const StyledSpinner = styled.span`
  margin: 3rem;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  box-shadow: 0 -2rem rgba(0, 0, 0, 1), 1.5rem -1.5rem rgba(0, 0, 0, 0.875),
    2rem 0 rgba(0, 0, 0, 0.75), 1.5rem 1.5rem rgba(0, 0, 0, 0.625),
    0 2rem rgba(0, 0, 0, 0.5), -1.5rem 1.5rem rgba(0, 0, 0, 0.375),
    -2rem 0 rgba(0, 0, 0, 0.25), -1.5rem -1.5rem rgba(0, 0, 0, 0.125);
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
