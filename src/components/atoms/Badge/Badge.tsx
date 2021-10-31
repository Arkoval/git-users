import React, { ReactElement, useEffect, useState } from "react";
import { StyledBadge } from "./Badge.styles";

interface BadgeProps {
  readonly id: number;
}
type Teams = "Team A" | "Team B" | "Team C";

export const Badge = ({ id }: BadgeProps): ReactElement => {
  const [teams, setTeams] = useState<Teams>();

  const chooseTeam = () => {
    if (id % 4 === 0 && id % 6 === 0) setTeams("Team C");
    else if (id % 6 === 0) setTeams("Team B");
    else if (id % 4 === 0) setTeams("Team A");
    else return;
  };
  useEffect(() => {
    chooseTeam();
  }, []);
  return <StyledBadge teams={teams}>{teams}</StyledBadge>;
};
