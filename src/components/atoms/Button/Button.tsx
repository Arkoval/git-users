import React from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  to: string;
};

export const Button: React.FC<ButtonProps> = ({ children, to, ...props }) => {
  return (
    <StyledButton href={to} {...props}>
      {children}
    </StyledButton>
  );
};
