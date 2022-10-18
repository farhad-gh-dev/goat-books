import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Text, SignInForm, SignUpForm, ResetPasswordForm } from "Components";
import ProtectedRoutes from "./ProtectedRoutes";
import Auth from "./Auth/Auth";

const auth = { isLoading: false, user: false };

const AppRoutes: React.FC = () => {
  if (auth.isLoading) return <Text>loading routes...</Text>;
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app" />} />

      <Route element={<Auth isAllowed={!auth.user} redirectPath="/app" />}>
        <Route path="/auth/sign-in" element={<SignInForm />} />
        <Route path="/auth/sign-up" element={<SignUpForm />} />
        <Route path="/auth/reset-password" element={<ResetPasswordForm />} />
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
