import { LogoTitle } from "components/molecules/LogoTitle/LogoTitle";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { Wrapper } from "./Tobpar.styles";

export const Topbar = (): ReactElement => {
  const data = useLocation();

  return (
    <Wrapper>
      {data.pathname.includes("/users/") ? <Link to="/">Back</Link> : null}
      <LogoTitle>GitHub users</LogoTitle>
    </Wrapper>
  );
};
