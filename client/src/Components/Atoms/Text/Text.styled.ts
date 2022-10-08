import styled, { css } from "styled-components";
import { typography, screenSize } from "Styles";

/*Use font weight types*/
const fontWeightProps = css<{ fontWeight?: string }>`
  ${(props) =>
    props.fontWeight === "light" ||
    "regular" ||
    "medium" ||
    "semi_bold" ||
    "bold"
      ? `
    font-weight: ${
      typography.weight[props.fontWeight as keyof typeof typography.weight]
    };
    `
      : `font-weight: ${props.fontWeight}`};
`;

export const StyledParagraph = styled.p<{
  isInline?: boolean;
  opacity?: number;
  size?: string;
  fontWeight?: string;
  textTransform?: string;
  overflowEllipsis?: string;
}>`
  display: block;
  color: ${(props) => props.theme.color.text_color};
  font-size: calc(${typography.size.text_26} / 2);
  ${screenSize.laptop} {
    font-size: calc(${typography.size.text_30} / 2);
  }

  ${(props) =>
    props.isInline &&
    `
    display: inline-block;
    `};

  ${(props) =>
    props.size === "lg" &&
    `
    font-size: ${typography.size.text_16};
    ${screenSize.laptop} {
      font-size: ${typography.size.text_18};
    }
    `};

  ${fontWeightProps};

  ${(props) =>
    props.textTransform &&
    `
    text-transform: ${props.textTransform};
    `};

  ${(props) =>
    props.overflowEllipsis &&
    `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

export const StyledSpan = StyledParagraph.withComponent("span");
