import React from "react";
import { StyledLink } from "./Link.styled";

export type Props = {} & React.ComponentProps<"a">;

const Link: React.FC<Props> = ({ children, ...props }) => {
  const RenderLink: any = StyledLink;
  return (
    <RenderLink tabIndex={0} {...props}>
      {children}
    </RenderLink>
  );
};

export default Link;
