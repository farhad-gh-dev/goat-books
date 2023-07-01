import { Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AppLayout } from "@/components/layouts";
import { Posts } from "@/features/posts";
import { Profile } from "@/features/profile";
import { Bookmarks } from "@/features/bookmarks";

const App = () => {
  return (
    <AppLayout>
      <Suspense
        fallback={
          <div>
            <div>loading...</div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </AppLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="posts" /> },
      { path: "/posts", element: <Posts /> },
      { path: "/profile", element: <Profile /> },
      { path: "/bookmarks", element: <Bookmarks /> },
    ],
  },
  { path: "/auth/sign-in", element: <Navigate to="/posts" /> },
  { path: "/auth/sign-up", element: <Navigate to="/posts" /> },
  {
    path: "/*",
    element: <div>404</div>,
  },
];
