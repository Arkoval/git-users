import styled from "styled-components";

interface Props {
  teams: "Team A" | "Team B" | "Team C" | undefined;
}
export const StyledBadge = styled.span<Props>`
  display: ${({ teams }) => (teams ? "inline" : "none")};
  color: ${({ theme }) => theme.colors.button};
  padding: 2px 4px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  margin-right: 6px;
  background: ${({ teams, theme }) => {
    if (teams === "Team A") return theme.colors.aBackground;
    if (teams === "Team B") return theme.colors.bBackground;
    if (teams === "Team C") return theme.colors.cBackground;
  }};
  color: ${({ teams, theme }) => {
    if (teams === "Team A") return theme.colors.aText;
    if (teams === "Team B") return theme.colors.bText;
    if (teams === "Team C") return theme.colors.cText;
  }};
`;
