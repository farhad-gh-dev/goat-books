import React, { useState } from "react";
import { Heading, TextInput, Link, Text } from "Components/Atoms";
import {
  StyledAuthForm,
  GoogleImage,
  GoogleAuthButton,
  GoogleAuthText,
  ResetPasswordContainer,
  SubmitButton,
} from "./AuthForms.styled";
import GoogleLogo from "Assets/google-logo.png";

export const SignInForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithGoogle = () => {
    console.log("google sign-in clicked...");
  };

  const handleSignIn = () => {
    console.log("sign-in btn clicked...");
  };

  return (
    <StyledAuthForm>
      <Heading h2 fontWeight="regular" className="heading">
        Welcome back
      </Heading>

      <GoogleAuthButton onClick={handleSignInWithGoogle} fullWidth>
        <GoogleImage src={GoogleLogo} alt="" />
        <GoogleAuthText textTransform="capitalize" fontWeight="semi-bold">
          Sign in with google
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
        className="text-input additional-margin"
      />

      {/* <ResetPasswordContainer>
        <Link href="/auth/reset-password">Forgot Password</Link>
      </ResetPasswordContainer> */}

      <SubmitButton onClick={handleSignIn} variant="primary" fullWidth>
        Sign In
      </SubmitButton>

      <Text size="lg">
        Don’t have an account?{" "}
        <Link className="redirect-link" href="/auth/sign-up">
          Sign up
        </Link>{" "}
        now.
      </Text>
    </StyledAuthForm>
  );
};
