import { Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";

const App = () => {
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

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="dashboard" /> },
      { path: "/dashboard", element: <div>dashboard</div> },
    ],
  },
];
