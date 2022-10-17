import React, { useState } from "react";
import { Heading, TextInput, Link, Text } from "Components/Atoms";
import {
  StyledSignInForm,
  GoogleImage,
  GoogleSignInButton,
  GoogleLoginText,
  ResetPasswordContainer,
  SignInButton,
} from "./SignInForm.styled";
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
    <StyledSignInForm>
      <Heading h2 fontWeight="regular" className="heading">
        Welcome back
      </Heading>

      <GoogleSignInButton onClick={handleSignInWithGoogle} fullWidth>
        <GoogleImage src={GoogleLogo} alt="" />
        <GoogleLoginText textTransform="capitalize" fontWeight="semi-bold">
          Sign in with google
        </GoogleLoginText>
      </GoogleSignInButton>

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

      <ResetPasswordContainer>
        <Link href="/auth/reset-password">Forgot Password</Link>
      </ResetPasswordContainer>

      <SignInButton onClick={handleSignIn} variant="primary" fullWidth>
        Sign In
      </SignInButton>

      <Text size="lg">
        Don’t have an account?{" "}
        <Link className="sign-up-link" href="/auth/sign-up">
          Sign up
        </Link>{" "}
        now.
      </Text>
    </StyledSignInForm>
  );
};
