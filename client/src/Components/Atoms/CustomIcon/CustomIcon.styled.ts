import styled from "styled-components";
import { screenSize } from "Styles";

export const StyledCustomIcon = styled.div<{
  color?: string;
  strokeColor?: string;
}>`
  display: inline-block;
  position: relative;

  svg {
    display: block;
    width: 16px;
    height: 16px;

    ${screenSize.laptop} {
      width: 20px;
      height: 20px;
    }

    path,
    line,
    g {
      ${(props) =>
        props.color &&
        `
            fill: ${
              props.color === "primary"
                ? props.theme.color.primary
                : props.color
            };
        `};

      ${(props) =>
        props.strokeColor &&
        `
            stroke: ${
              props.strokeColor === "primary"
                ? props.theme.color.primary
                : props.strokeColor
            };
        `};
    }
  }
`;
