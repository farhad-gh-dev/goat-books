import styled, { css } from "styled-components";
import { screenSize } from "Styles";
import { Text } from "Components";

const imageSrcProps = css<{ imageSrc?: string }>`
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const StyledAuthLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const LeftPanel = styled.div`
  display: none;

  ${screenSize.laptop} {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 43.75%;
  }
`;

export const BackgroundImage = styled.div<{ imageSrc?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000040;
  z-index: -1;

  ${(props) => props.imageSrc && imageSrcProps}

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000020;
  }
`;

export const BrandLogoContainer = styled.a`
  position: absolute;
  top: 60px;
  left: 60px;
`;

export const TextContainer = styled.div`
  width: 480px;
  padding: 32px 20px;
  background-color: rgba(0, 0, 0, 0.32);
  border-radius: 15px;
`;

export const AppDescription = styled(Text)`
  color: ${(props) => props.theme.color.text_color_inverted};
`;

export const AuthPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px 41px;

  ${screenSize.laptop} {
    padding: 30px;
  }
`;
