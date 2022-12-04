import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Text,
  SignInForm,
  SignUpForm,
  ResetPasswordForm,
  AuthLayout,
} from "Components";
import ProtectedRoutes from "./ProtectedRoutes";

const auth = { isLoading: false, user: false };

const AppRoutes: React.FC = () => {
  if (auth.isLoading) return <Text>Loading...</Text>;

  // --- FOR APP ROUTES REQUESTS ---
  // request for user
  // send to target route if user check is successful
  // redirect to login if user check failed

  // --- FOR AUTH ROUTES REQUESTS ---
  // request for user
  // send to auth route if user check failed
  // redirect to app if user check is successful

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app" />} />

      <Route
        element={<ProtectedRoutes isAllowed={!auth.user} redirectPath="/" />}
      >
        <Route element={<AuthLayout />}>
          <Route path="/auth/sign-in" element={<SignInForm />} />
          <Route path="/auth/sign-up" element={<SignUpForm />} />
          <Route path="/auth/reset-password" element={<ResetPasswordForm />} />
        </Route>
      </Route>

      <Route
        element={
          <ProtectedRoutes isAllowed={auth.user} redirectPath="/auth/sign-in" />
        }
      >
        <Route path="/app" element={<Text>app</Text>} />
      </Route>
      <Route path="*" element={<div>404 page</div>} />
    </Routes>
  );
};

export default AppRoutes;
