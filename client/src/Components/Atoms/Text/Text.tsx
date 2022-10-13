import React from "react";
import { StyledParagraph, StyledSpan } from "./Text.styled";

type namedFontWeightTypes =
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold";

export type TextProps = {
  isInline?: boolean;
  isSpan?: boolean;
  size?: "sm" | "md" | "lg";
  fontWeight?: namedFontWeightTypes | "300" | "400" | "500" | "600" | "700";
  textTransform?: "uppercase" | "capitalize" | "lowercase" | "none";
  overflowEllipsis?: boolean;
} & React.ComponentProps<"p"> &
  React.ComponentProps<"span">;

export const Text: React.FC<TextProps> = ({
  isSpan = false,
  children = null,
  ...props
}) => {
  let TextType: any = StyledParagraph;
  if (isSpan) {
    TextType = StyledSpan;
  }

  return <TextType {...props}>{children}</TextType>;
};
