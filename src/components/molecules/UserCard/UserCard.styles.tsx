import styled from "styled-components";

interface IWrapper {
  hasDetails: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  padding: ${({ hasDetails }) => (hasDetails ? "0" : "20px")};
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid
    ${({ theme, hasDetails }) => (hasDetails ? "none" : theme.colors.gray)};
`;
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
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
export const StyledHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
type IContainer = {
  isBig: boolean;
};

export const ImageContainer = styled.figure<IContainer>`
  height: ${({ isBig }) => (isBig ? "120px" : "76px")};
  width: ${({ isBig }) => (isBig ? "120px" : "76px")};
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
