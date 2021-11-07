import React from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  to: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, to }) => {
  return (
    <StyledButton to={to} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
