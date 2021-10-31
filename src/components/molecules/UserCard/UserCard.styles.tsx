import styled from "styled-components";

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.default};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .user-info {
    margin-top: 6px;
    display: flex;
    align-items: baseline;

    p {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  a:last-child {
    margin-top: auto;
  }
`;
export const ImageContainer = styled.figure`
  height: 76px;
  width: 76px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  overflow: hidden;
  margin-right: 12px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const LogoLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.secondary};
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  svg {
    height: 12px;
    width: 12px;
    margin-right: 6px;
    path {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
