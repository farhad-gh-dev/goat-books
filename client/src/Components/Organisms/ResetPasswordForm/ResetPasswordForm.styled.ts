import styled from "styled-components";
import { screenSize, typography } from "Styles";
import { Button } from "Components/Atoms";

export const StyledResetPasswordForm = styled.form`
  width: 100%;

  ${screenSize.laptop} {
    width: 390px;
  }

  .heading {
    margin-bottom: 24px;
    text-align: center;

    ${screenSize.laptop} {
      margin-bottom: 40px;
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
`;

export const SubmitButton = styled(Button)`
  font-size: ${typography.size.text_18};
  margin-bottom: 12px;

  ${screenSize.laptop} {
    font-size: ${typography.size.text_22};
    margin-bottom: 24px;
  }
`;
