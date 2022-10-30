import React, { createContext, useState, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "Styles";
import type { AppTheme } from "Styles/types";

const AppThemeContext = createContext({});

interface Props {
  children?: React.ReactNode;
}

const getSelectedTheme = (): AppTheme => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme) {
    const parsedLocalTheme = JSON.parse(localTheme);
    const isValidTheme = Object.keys(themes).includes(parsedLocalTheme);
    if (isValidTheme) return parsedLocalTheme;
  }

  const isDarkPreferredTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return isDarkPreferredTheme ? "dark" : "light";
};

export const AppThemeProvider: React.FC<Props> = ({ children = null }) => {
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
