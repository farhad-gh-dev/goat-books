import React, { useState } from "react";
import { Heading, TextInput, Link, Text } from "Components/Atoms";
import {
  StyledAuthForm,
  GoogleImage,
  GoogleAuthButton,
  GoogleAuthText,
  SubmitButton,
} from "./AuthForms.styled";
import GoogleLogo from "Assets/google-logo.png";

export const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleSignUpWithGoogle = () => {
    console.log("google sign-Up clicked...");
  };

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("sign-Up btn clicked...");
  };

  return (
    <StyledAuthForm>
      <Heading h2 fontWeight="regular" className="heading">
        Hello, friend
      </Heading>

      <GoogleAuthButton
        type="button"
        onClick={handleSignUpWithGoogle}
        fullWidth
      >
        <GoogleImage src={GoogleLogo} alt="" />
        <GoogleAuthText textTransform="capitalize" fontWeight="semi-bold">
          Sign up with google
        </GoogleAuthText>
      </GoogleAuthButton>

      <TextInput
        label="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        className="text-input"
      />
      <TextInput
        isPassword
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        className="text-input"
      />

      <TextInput
        isPassword
        label="password repeat"
        value={passwordRepeat}
        onChange={(e) => setPasswordRepeat(e.target.value)}
        fullWidth
        className="text-input additional-margin"
      />

      <SubmitButton
        type="submit"
        onClick={handleSignUp}
        variant="primary"
        fullWidth
      >
        Sign Up
      </SubmitButton>

      <Text size="lg">
        Already have an account?{" "}
        <Link className="redirect-link" href="/auth/sign-in">
          Sign in
        </Link>{" "}
        now.
      </Text>
    </StyledAuthForm>
  );
};
