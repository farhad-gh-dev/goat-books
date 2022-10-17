import React, { useState } from "react";
import { Heading, TextInput, Link, Text } from "Components/Atoms";
import {
  StyledSignUpForm,
  GoogleImage,
  GoogleSignUpButton,
  GoogleLoginText,
  SignUpButton,
} from "./SignUpForm.styled";
import GoogleLogo from "Assets/google-logo.png";

export const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleSignUpWithGoogle = () => {
    console.log("google sign-Up clicked...");
  };

  const handleSignUp = () => {
    console.log("sign-Up btn clicked...");
  };

  return (
    <StyledSignUpForm>
      <Heading h2 fontWeight="regular" className="heading">
        Hello, friend
      </Heading>

      <GoogleSignUpButton onClick={handleSignUpWithGoogle} fullWidth>
        <GoogleImage src={GoogleLogo} alt="" />
        <GoogleLoginText textTransform="capitalize" fontWeight="semi-bold">
          Sign up with google
        </GoogleLoginText>
      </GoogleSignUpButton>

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
        className="text-input last-item"
      />

      <SignUpButton onClick={handleSignUp} variant="primary" fullWidth>
        Sign Up
      </SignUpButton>

      <Text size="lg">
        Already have an account?{" "}
        <Link className="sign-in-link" href="/auth/sign-in">
          Sign in
        </Link>{" "}
        now.
      </Text>
    </StyledSignUpForm>
  );
};
