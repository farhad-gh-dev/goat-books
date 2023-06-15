import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

export const AppProvider: React.FC = () => {
  return (
    <React.Suspense>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.Suspense>
  );
};
