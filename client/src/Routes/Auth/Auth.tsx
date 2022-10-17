import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useTheme } from "styled-components";
import {
  StyledAuth,
  LeftPanel,
  BackgroundImage,
  BrandLogoContainer,
  TextContainer,
  AppDescription,
  AuthPanel,
} from "./Auth.styled";
import { BrandLogo } from "Components";
import SignInBackground from "Assets/sign-in-bg.jpg";

export interface Props {
  isAllowed?: boolean;
  redirectPath?: string;
}

const Auth: React.FC<Props> = ({ isAllowed = false, redirectPath = "/" }) => {
  const theme: any = useTheme();

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <StyledAuth>
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
        <Outlet />
      </AuthPanel>
    </StyledAuth>
  );
};

export default Auth;
