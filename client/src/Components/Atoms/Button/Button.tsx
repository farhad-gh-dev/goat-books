import React from "react";
import { StyledButton } from "./Button.styled";

export type Props = {
  variant?: "primary";
  fullWidth?: boolean;
  className?: string;
} & React.ComponentProps<"button">;

const Button: React.FC<Props> = ({ children, ...props }) => {
  const ButtonRender: any = StyledButton;
  return <ButtonRender {...props}>{children}</ButtonRender>;
};

export default Button;
