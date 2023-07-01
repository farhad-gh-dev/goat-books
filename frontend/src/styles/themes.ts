import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent?: Palette["primary"];
    tertiary?: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
    tertiary?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#32A691",
    },
    secondary: {
      main: "#DAECDC",
      light: "#A6FFF7",
    },
    tertiary: {
      main: "#F5D144",
    },
    accent: {
      main: "#DB3D6F",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#050505",
      secondary: "#ffffff",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            color: "text.primary",
          }),
      },
    },
  },
});

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};
