import React, { useState } from "react";
import { Heading, TextInput } from "Components/Atoms";
import {
  StyledResetPasswordForm,
  SubmitButton,
} from "./ResetPasswordForm.styled";

export const ResetPasswordForm: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleSetNewPassword = () => {
    console.log("submit btn clicked...");
  };

  return (
    <StyledResetPasswordForm>
      <Heading h2 fontWeight="regular" className="heading">
        Reset your password
      </Heading>

      <TextInput
        isPassword
        label="new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        className="text-input"
      />

      <TextInput
        isPassword
        label="new password repeat"
        value={passwordRepeat}
        onChange={(e) => setPasswordRepeat(e.target.value)}
        fullWidth
        className="text-input last-item"
      />

      <SubmitButton onClick={handleSetNewPassword} variant="primary" fullWidth>
        Submit
      </SubmitButton>
    </StyledResetPasswordForm>
  );
};
