import { Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AuthLayout } from "@/components/layouts";
import { LoginForm } from "@/features/auth";

const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Suspense
        fallback={
          <div>
            <div>loading...</div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </AuthLayout>
  );
};

export const publicRoutes = [
  {
    path: "/",
    element: <AuthRoutes />,
    children: [
      { path: "/", element: <Navigate to="/auth/sign-in" /> },
      { path: "/auth/sign-in", element: <LoginForm /> },
      { path: "/*", element: <Navigate to="/auth/sign-in" /> },
    ],
  },
];
