import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 160px;
  gap: 20px;
  /* overflow-y: scroll;
  height: 80vh;
  overflow-x: hidden; */
`;
export const CardWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.default};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;
