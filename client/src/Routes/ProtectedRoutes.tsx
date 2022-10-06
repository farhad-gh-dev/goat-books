import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export interface Props {
  isAllowed?: boolean;
  redirectPath?: string;
  children?: any;
}

const ProtectedRoutes: React.FC<Props> = ({
  isAllowed = false,
  redirectPath = "/auth/login",
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
