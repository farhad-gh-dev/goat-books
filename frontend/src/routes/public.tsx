import { Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <div>loading...</div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export const publicRoutes = [
  {
    path: "/",
    element: <AuthRoutes />,
    children: [
      { path: "/", element: <Navigate to="/auth/sign-in" /> },
      { path: "/auth/sign-in", element: <div>sign-in page</div> },
      { path: "/*", element: <Navigate to="/auth/sign-in" /> },
    ],
  },
];
