import styled, { css } from "styled-components";
import { screenSize } from "Styles";

const imageStyle = css<{ imageSrc?: string }>`
  background-image: url(${(props) => props.imageSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const StyledAvatar = styled.div<{ imageSrc?: string }>`
  position: relative;
  border-radius: 100%;

  &,
  svg {
    width: 36px;
    height: 36px;

    ${screenSize.laptop} {
      width: 50px;
      height: 50px;
    }
  }

  ${(props) => props.imageSrc && imageStyle};
`;
