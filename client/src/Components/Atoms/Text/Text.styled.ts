import styled from "styled-components";
import { typography, screenSize } from "Styles";
import { selectFontWeight } from "Styles/mixins";

export const StyledParagraph = styled.p<{
  isInline?: boolean;
  opacity?: number;
  size?: string;
  fontWeight?: string;
  textTransform?: string;
  textAlign?: string;
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

  ${(props) => props.fontWeight && selectFontWeight(props.fontWeight)};

  ${(props) =>
    props.textTransform &&
    `
    text-transform: ${props.textTransform};
    `};

  ${(props) =>
    props.textAlign &&
    `
    text-align: ${props.textAlign};
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
