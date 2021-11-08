import { ReactElement } from "react";
import { StyledSpinner, Wrapper } from "./Spinner.styles";

export const Spinner = (): ReactElement => {
  return (
    <Wrapper>
      <StyledSpinner />
    </Wrapper>
  );
};
