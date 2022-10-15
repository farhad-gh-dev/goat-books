import React from "react";
import { useTheme } from "styled-components";
import {
  StyledSignIn,
  LeftPanel,
  BackgroundImage,
  BrandLogoContainer,
  TextContainer,
  AppDescription,
  AuthPanel,
} from "./SignIn.styled";
import { BrandLogo, SignInForm } from "Components";
import SignInBackground from "Assets/sign-in-bg.jpg";

export const SignIn: React.FC = () => {
  const theme: any = useTheme();

  return (
    <StyledSignIn>
      <LeftPanel>
        <BackgroundImage imageSrc={SignInBackground} />
        <BrandLogoContainer>
          <BrandLogo isDark={theme.name !== "dark"} />
        </BrandLogoContainer>
        <TextContainer>
          <AppDescription textAlign="center" size="lg" fontWeight="semi-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </AppDescription>
        </TextContainer>
      </LeftPanel>
      <AuthPanel>
        <SignInForm />
      </AuthPanel>
    </StyledSignIn>
  );
};
