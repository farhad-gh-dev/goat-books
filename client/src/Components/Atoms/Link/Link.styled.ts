import styled from "styled-components";
import { typography, screenSize } from "Styles";

export const StyledLink = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.color.text_color};
  font-size: ${typography.size.text_16};
  text-decoration: underline;
  cursor: pointer;

  ${screenSize.laptop} {
    font-size: ${typography.size.text_18};
  }

  &:hover,
  &:active {
    color: ${(props) => props.theme.color.secondary};
  }
`;
