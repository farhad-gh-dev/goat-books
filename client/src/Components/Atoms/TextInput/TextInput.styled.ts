import styled, { css } from "styled-components";
import { typography, screenSize } from "Styles";

const hasValueProps = css`
  top: 0;
  transform: translateY(-25px);
  opacity: 0.65;
`;

const fullWidthProps = css`
  width: 100%;
`;

export const StyledTextInput = styled.div<{
  hasValue?: boolean;
  fullWidth?: boolean;
}>`
  width: 300px;
  padding-top: 20px;

  ${(props) => props.fullWidth && fullWidthProps}
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

export const Input = styled.input<{ hasValue?: boolean }>`
  position: relative;
  width: 100%;
  padding: 12px;
  font-size: ${typography.size.text_14};
  background-color: transparent;
  color: ${(props) => props.theme.color.text_color};
  border: 2px solid transparent;
  box-sizing: border-box;
  z-index: 1;

  &:focus {
    outline: none;
    border: 2px solid black;
    border-radius: 5px;
    border-color: ${(props) =>
      props.hasValue ? `${props.theme.color.secondary}CC` : `black`};
  }

  ${screenSize.laptop} {
    padding: 15px;
    font-size: ${typography.size.text_16};
  }

  ${(props) =>
    props.hasValue &&
    `border: 2px solid ${props.theme.color.secondary}CC; border-radius: 5px;`}
`;

export const InputContainer = styled.div<{ hasValue?: boolean }>`
  position: relative;
  border-bottom: 1px solid ${(props) => `${props.theme.color.contrast}30`};

  /* for some reason if font-size is in hasValueProps it will bug out! ¯\_(ツ)_/¯*/
  ${(props) =>
    props.hasValue
      ? `
        border-color: transparent;

        ${Label} {
          ${hasValueProps};
          font-size: ${typography.size.text_12};

          ${screenSize.laptop} {
            font-size: ${typography.size.text_14};
          }
        }`
      : `&:focus-within {
          border-color: transparent;

          ${Label} {
            ${hasValueProps};
            font-size: ${typography.size.text_12};

            ${screenSize.laptop} {
              font-size: ${typography.size.text_14};
            }
          }
        }`}
`;
