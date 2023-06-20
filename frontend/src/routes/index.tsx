import { useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { useSignInStatus } from "@/features/auth/api/sing-in-status";

export const AppRoutes = () => {
  const { data: isSignedIn, isLoading } = useSignInStatus();

  const routes = isSignedIn ? protectedRoutes : publicRoutes;
  const element = useRoutes(routes);

  if (isLoading)
    return (
      <div>
        <div>loading...</div>
      </div>
    );

  return element;
};
