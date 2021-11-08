import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-auto-rows: 140px;
  gap: 10px;
  max-width: 100%;
  @media screen and (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 160px;
    padding: 15px;
  }
  @media screen and (min-width: 860px) {
    padding: 30px;
    gap: 20px;
  }
`;
export const CardWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.default};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;
