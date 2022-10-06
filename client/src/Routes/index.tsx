import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes: React.FC = () => {
  const [auth, setAuth] = useState({ isLoading: true, user: true });

  if (auth.isLoading) return <div>loading routes...</div>;
  return (
    <Routes>
      <Route path="/" element={<div>/home</div>} />
      <Route path="/auth/login" element={<div>login page</div>} />
      <Route element={<ProtectedRoutes isAllowed={auth.user} />}>
        <Route path="/app" element={<div>app</div>} />
        <Route path="/app/test" element={<div>app/test</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
