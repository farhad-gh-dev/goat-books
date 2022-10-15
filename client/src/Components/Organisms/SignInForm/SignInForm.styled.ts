import styled from "styled-components";
import { screenSize, typography } from "Styles";
import { Button, Text } from "Components";

export const StyledSignInForm = styled.div`
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
  }

  .sign-up-link {
    font-weight: ${typography.weight["semi-bold"]};
  }
`;

export const GoogleSignInButton = styled(Button)`
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

export const ResetPasswordContainer = styled.div`
  text-align: right;
  margin-bottom: 70px;
`;

export const SignInButton = styled(Button)`
  font-size: ${typography.size.text_18};
  margin-bottom: 12px;

  ${screenSize.laptop} {
    font-size: ${typography.size.text_22};
    margin-bottom: 24px;
  }
`;
