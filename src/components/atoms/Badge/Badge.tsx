import { ReactElement, useEffect, useState } from "react";
import { StyledBadge } from "./Badge.styles";
import { Teams } from "./Badge.types";

export const Badge = ({ id }: { id: number }): ReactElement => {
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
