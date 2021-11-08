import React from "react";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ children, onClick, to }) => {
  return (
    <StyledButton to={to} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
