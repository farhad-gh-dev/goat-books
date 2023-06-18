import { useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const isUserLoggedIn = false;
  const isLoading = false;

  const routes = isUserLoggedIn ? protectedRoutes : publicRoutes;
  const element = useRoutes(routes);

  if (isLoading)
    return (
      <div>
        <div>loading...</div>
      </div>
    );

  return element;
};
