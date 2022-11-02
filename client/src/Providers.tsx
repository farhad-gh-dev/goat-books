import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "Styles/global";
import { AppThemeProvider } from "Contexts/AppThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppProvider: React.FC<{ children: any }> = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppThemeProvider>
          <GlobalStyle />
          {children}
        </AppThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
