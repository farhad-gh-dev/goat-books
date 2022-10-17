import styled from "styled-components";
import { screenSize, typography } from "Styles";
import { Button, Text } from "Components/Atoms";

export const StyledSignUpForm = styled.form`
  width: 100%;

  ${screenSize.laptop} {
    width: 390px;
  }

  .heading {
    margin-bottom: 32px;
    text-align: center;

    ${screenSize.laptop} {
      margin-bottom: 42px;
      text-align: left;
    }
  }

  .text-input {
    margin-bottom: 16px;

    ${screenSize.laptop} {
      margin-bottom: 24px;
    }

    &.last-item {
      margin-bottom: 86px;
    }
  }

  .sign-in-link {
    font-weight: ${typography.weight["semi-bold"]};
  }
`;

export const GoogleSignUpButton = styled(Button)`
  margin-bottom: 24px;

  ${screenSize.laptop} {
    margin-bottom: 40px;
  }
`;

export const GoogleImage = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 8px;

  ${screenSize.laptop} {
    width: 34px;
    height: 34px;
  }
`;

export const GoogleLoginText = styled(Text)`
  font-size: ${typography.size.text_14};

  ${screenSize.laptop} {
    font-size: ${typography.size.text_16};
  }
`;

export const SignUpButton = styled(Button)`
  font-size: ${typography.size.text_18};
  margin-bottom: 12px;

  ${screenSize.laptop} {
    font-size: ${typography.size.text_22};
    margin-bottom: 24px;
  }
`;
