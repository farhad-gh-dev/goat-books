import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { queryClient } from "@/libs/react-query";

import { AppRoutes } from "./routes";
import { theme } from "./styles/themes";

export const AppProvider: React.FC = () => {
  return (
    <React.Suspense>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="top-right"
            limit={3}
            autoClose={2000}
            draggableDirection="y"
            theme="colored"
          />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </React.Suspense>
  );
};
