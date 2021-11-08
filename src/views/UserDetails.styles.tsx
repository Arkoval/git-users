import styled from "styled-components";

export const Wrapper = styled.main`
  background: ${({ theme }) => theme.colors.white};
  margin: 20px 10px;
  max-width: 1130px;
  height: 600px;
  padding: 20px;
  @media screen and (min-width: 800px) {
    margin: 30px auto;
  }
`;
export const UserWrapper = styled.div`
  margin-top: 12px;
`;

export const StyledHeading = styled.h3`
  margin-top: 36px;
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
