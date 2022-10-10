import styled from "styled-components";
import { typography, screenSize } from "Styles";
import { selectFontWeight } from "Styles/mixins";

export const StyledH1 = styled.h1<{
  fontWeight?: string;
  textTransform?: string;
}>`
  color: ${(props) => props.theme.color.text_color};
  font-size: ${typography.size.text_26};
  ${screenSize.laptop} {
    font-size: calc(${typography.size.text_18}*2);
  }

  ${(props) => props.fontWeight && selectFontWeight(props.fontWeight)};

  ${(props) =>
    props.textTransform &&
    `
    text-transform: ${props.textTransform};
    `};
`;

export const StyledH2 = styled(StyledH1).attrs({ as: "h2" })`
  font-size: ${typography.size.text_24};
  ${screenSize.laptop} {
    font-size: calc(${typography.size.text_16}*2);
  }
`;

export const StyledH3 = styled(StyledH1).attrs({ as: "h3" })`
  font-size: ${typography.size.text_20};
  ${screenSize.laptop} {
    font-size: ${typography.size.text_26};
  }
`;
