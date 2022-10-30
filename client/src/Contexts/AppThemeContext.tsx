import React, { createContext, useState, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "Styles";
import type { AppTheme } from "Styles/types";

interface Props {
  children?: React.ReactNode;
}

const AppThemeContext = createContext({});

const getSelectedTheme = (): AppTheme => {
  const localTheme: any = localStorage.getItem("theme");
  if (localTheme) {
    const isValidTheme = Object.keys(themes).includes(localTheme);
    if (isValidTheme) return localTheme;
  }

  const isDarkPreferredTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return isDarkPreferredTheme ? "dark" : "light";
};

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<AppTheme>(() =>
    getSelectedTheme()
  );

  const memoizedSetAppTheme = useMemo(
    () => ({
      setAppTheme: (themeName: AppTheme) => {
        localStorage.setItem("theme", themeName);
        setActiveTheme(themeName);
      },
    }),
    []
  );

  const memoizedTheme = useMemo(() => themes[activeTheme], [activeTheme]);

  return (
    <AppThemeContext.Provider value={memoizedSetAppTheme}>
      <ThemeProvider theme={memoizedTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};
