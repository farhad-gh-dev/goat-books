import { useState } from "react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "./Styles";
import { GlobalStyle } from "./Styles/global";

const AppProvider: React.FC<{ children: any }> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "light";
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[`${theme as keyof typeof themes}`]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
