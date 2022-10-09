import styled, { css } from "styled-components";
import { color, typography, screenSize } from "Styles";

const imageOnlyStyle = css`
  margin-right: 10px;

  ${screenSize.laptop} {
    margin-right: 15px;
  }
`;

export const LogoImage = styled.img<{
  imageOnly?: boolean;
}>`
  width: 36px;
  height: 36px;

  ${screenSize.laptop} {
    width: 60px;
    height: 60px;
  }

  ${(props) => !props.imageOnly && imageOnlyStyle};
`;

export const BrandTitle = styled.span<{
  isDark?: boolean;
}>`
  font-size: ${typography.size.text_20};
  font-weight: ${typography.weight.medium};
  text-transform: capitalize;

  ${screenSize.laptop} {
    font-size: ${typography.size.text_30};
  }

  span {
    color: ${color.primary};
  }
`;

export const StyledBrandLogo = styled.div<{ isDark?: boolean }>`
  display: flex;
  align-items: center;

  ${BrandTitle} {
    color: ${(props) => (props.isDark ? color.lightest : color.darkest)};
  }
`;
