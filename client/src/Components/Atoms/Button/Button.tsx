import React from "react";
import { StyledButton } from "./Button.styled";

export type Props = {
  variant?: "primary";
  fullWidth?: boolean;
  overflowEllipsis?: boolean;
  className?: string;
} & React.ComponentProps<"button">;

const Button: React.FC<Props> = ({ children, ref, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
