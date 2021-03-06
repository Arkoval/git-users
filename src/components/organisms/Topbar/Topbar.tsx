import { LogoTitle } from "components/molecules/LogoTitle/LogoTitle";
import { Link, useLocation } from "react-router-dom";
import { Wrapper } from "./Tobpar.styles";

export const Topbar = () => {
  const data = useLocation();

  return (
    <Wrapper>
      {data.pathname.includes("/users/") ? <Link to="/">Back</Link> : null}
      <LogoTitle>GitHub users</LogoTitle>
    </Wrapper>
  );
};
