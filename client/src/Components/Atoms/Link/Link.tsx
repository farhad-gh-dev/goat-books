import React from "react";
import { StyledLink } from "./Link.styled";

export type LinkProps = {} & React.ComponentProps<"a">;

export const Link: React.FC<LinkProps> = ({ children, ref, ...props }) => {
  return (
    <StyledLink tabIndex={0} {...props}>
      {children}
    </StyledLink>
  );
};
