import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Text } from "Components";
import ProtectedRoutes from "./ProtectedRoutes";

const auth = { isLoading: false, user: false };

const AppRoutes: React.FC = () => {
  if (auth.isLoading) return <Text>loading routes...</Text>;
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app" />} />
      <Route path="/auth/login" element={<Text>login page</Text>} />
      <Route element={<ProtectedRoutes isAllowed={auth.user} />}>
        <Route path="/app" element={<Text>app</Text>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
