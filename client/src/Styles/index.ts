// Global style variables
export const background = {
  app: "#FFFFFF",
  app_inverse: "#000000",
  placeholder_light: "#e8e8e8",
  placeholder_dark: "#c0c0c0",
};

export const color = {
  primary: "#3FC282", // Light Red

  lightest: "#FFFFFF",
  darkest: "#000000",

  positive: "#F33D3D",
  negative: "#0BDA51",
  warning: "#FFA800",
};

export const typography = {
  type: {
    primary: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  weight: {
    light: "300",
    regular: "400",
    medium: "500",
    "semi-bold": "600",
    bold: "700",
  },
  size: {
    text_10: "0.625rem",
    text_12: "0.75rem",
    text_14: "0.875rem",
    text_16: "1rem",
    text_18: "1.125rem",
    text_20: "1.25rem",
    text_22: "1.375rem",
    text_24: "1.5rem",
    text_26: "1.625rem",
    text_28: "1.75rem",
    text_30: "1.875rem",
    text_32: "2rem",
  },
};

export const ZIndex = {
  dropdown: 50,
};

export const breakpoint = {
  laptopScreen: 1280,
  largeScreen: 1920,
};

export const screenSize = {
  laptop: `@media (min-width: ${breakpoint.laptopScreen}px)`,
  desktop: `@media (min-width: ${breakpoint.largeScreen}px)`,
};

export const themes = {
  light: {
    name: "light",
    color: {
      primary: "#3FC282",
      secondary: "#0090A6",
      background: "#ffffff",
      text_color: "#000000",
      text_color_inverted: "#ffffff",
      contrast: "#000000",
      red: "#F30E23",
    },
  },
  dark: {
    name: "dark",
    color: {
      primary: "#3FC282",
      secondary: "#0090A6",
      background: "#000000",
      text_color: "#ffffff",
      text_color_inverted: "#000000",
      contrast: "#ffffff",
      red: "#F30E23",
    },
  },
};
