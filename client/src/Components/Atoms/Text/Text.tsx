import React, { ReactNode } from "react";
import { StyledText } from "./Text.styled";

export interface Props {
  children: ReactNode;
}

const Text: React.FC<Props> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
