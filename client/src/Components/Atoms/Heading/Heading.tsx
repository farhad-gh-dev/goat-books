import React from "react";
import { StyledH1, StyledH2, StyledH3 } from "./Heading.style";

type namedFontWeightTypes =
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold";

export type HeadingProps = {
  /**
   * Accept a value between 0 and 1 -> EX: 0.5
   */
  textTransform?: "uppercase" | "capitalize" | "lowercase" | "none";
  fontWeight?: namedFontWeightTypes | "300" | "400" | "500" | "600" | "700";
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
} & React.ComponentProps<"h1">;

export const Heading: React.FC<HeadingProps> = ({
  h1,
  h2,
  h3,
  children,
  ...props
}) => {
  let HeadingType: any = StyledH3;
  if (h1) HeadingType = StyledH1;
  if (h2) HeadingType = StyledH2;
  if (h3) HeadingType = StyledH3;

  return <HeadingType {...props}>{children}</HeadingType>;
};
