import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "Styles/global";
import { AppThemeProvider } from "Contexts/AppThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppProvider: React.FC<{ children: any }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <GlobalStyle />
        <Router>{children}</Router>
      </AppThemeProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
