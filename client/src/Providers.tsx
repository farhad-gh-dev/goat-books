import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "Styles/global";
import { AppThemeProvider } from "Contexts/AppThemeContext";

const AppProvider: React.FC<{ children: any }> = ({ children }) => {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <GlobalStyle />
        {children}
      </AppThemeProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
