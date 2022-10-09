import React, { ReactNode } from "react";
import { StyledButton } from "./Button.styled";

export type ButtonProps = {
  variant?: "primary";
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
} & React.ComponentProps<"button">;

const Button: React.FC<ButtonProps> = (props) => {
  const { children = null, ...rest } = props;

  const ButtonRender: any = StyledButton;
  return <ButtonRender {...rest}>{children}</ButtonRender>;
};

export default Button;
