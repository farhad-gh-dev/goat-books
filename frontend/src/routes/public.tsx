import { Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AuthLayout } from "@/components/layouts";
import { SignInForm, SignUpForm } from "@/features/auth";

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
      { path: "/auth/sign-in", element: <SignInForm /> },
      { path: "/auth/sign-up", element: <SignUpForm /> },
      { path: "/*", element: <Navigate to="/auth/sign-in" /> },
    ],
  },
];
