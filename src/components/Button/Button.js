import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ msg, icon }) => {
  return (
    <StyledButton>
      {msg}
      {icon}
    </StyledButton>
  );
};

export default Button;
