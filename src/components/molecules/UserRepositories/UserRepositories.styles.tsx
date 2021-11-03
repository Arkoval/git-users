import styled from "styled-components";

export const Wrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin-bottom: 5px;
    span {
      font-weight: 400;
    }
  }
`;
export const StyledList = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.md};
  overflow-y: scroll;
  height: 262px;
  margin: 10px 0;
`;
