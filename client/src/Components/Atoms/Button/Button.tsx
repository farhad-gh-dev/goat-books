import React from "react";
import { StyledButton } from "./Button.styled";

export type ButtonProps = {
  variant?: "primary";
  fullWidth?: boolean;
  overflowEllipsis?: boolean;
  className?: string;
} & React.ComponentProps<"button">;

export const Button: React.FC<ButtonProps> = ({ children, ref, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
