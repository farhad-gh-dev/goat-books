import React from "react";
import { StyledLink } from "./Link.styled";

export type Props = {} & React.ComponentProps<"a">;

const Link: React.FC<Props> = ({ children, ref, ...props }) => {
  return (
    <StyledLink tabIndex={0} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
