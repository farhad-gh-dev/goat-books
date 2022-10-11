import styled, { css } from "styled-components";
import { typography, screenSize } from "Styles";

const hasValueProps = css`
  top: 0;
  transform: translateY(-25px);
  opacity: 0.65;
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: ${typography.size.text_14};
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  z-index: 0;

  ${screenSize.laptop} {
    font-size: ${typography.size.text_16};
  }
`;

export const Input = styled.input`
  position: relative;
  width: 300px;
  padding: 12px;
  font-size: ${typography.size.text_14};
  background-color: transparent;
  color: ${(props) => props.theme.color.text_color};
  border-bottom: 1px solid ${(props) => `${props.theme.color.contrast}30`};
  z-index: 1;

  &:focus {
    outline-color: ${(props) => `${props.theme.color.secondary}85`};
  }

  ${screenSize.laptop} {
    padding: 15px;
    font-size: ${typography.size.text_16};
  }
`;

export const StyledTextInput = styled.div<{ hasValue?: boolean }>`
  position: relative;
  margin-top: 25px;

  /* for some reason if font-size is in hasValueProps it will bug out! ¯\_(ツ)_/¯*/
  ${(props) =>
    props.hasValue
      ? `${Label} {
          ${hasValueProps};
          font-size: ${typography.size.text_12};

          ${screenSize.laptop} {
            font-size: ${typography.size.text_14};
          }
        }`
      : `&:focus-within {
          ${Label} {
            ${hasValueProps};
            font-size: ${typography.size.text_12};

            ${screenSize.laptop} {
              font-size: ${typography.size.text_14};
            }
          }
        }`}
`;
