import styled, { css } from "styled-components";
import { typography, screenSize } from "Styles";

const primaryVariantStyle = css`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.text_color_inverted};
  box-shadow: none;

  &:hover {
    filter: brightness(92%);
  }
`;

const overflowEllipsisProps = css`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// add theme color to box
export const StyledButton = styled.button<{
  variant?: "primary";
  fullWidth?: boolean;
  overflowEllipsis?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  padding: 0 10px;
  font-size: ${typography.size.text_16};
  font-weight: ${typography.weight.medium};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text_color};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    transition: 0.1s ease-in-out;
    transform: scale(0.96);
  }

  ${screenSize.laptop} {
    height: 60px;
    padding: 0 15px;
    font-size: ${typography.size.text_20};
    border-radius: 15px;
  }

  ${(props) => props.variant === "primary" && primaryVariantStyle};

  ${(props) => props.fullWidth && `width: 100%`};

  ${(props) => props.overflowEllipsis && overflowEllipsisProps};
`;
