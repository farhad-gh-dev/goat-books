import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { StorybookGlobalStyle } from "../src/Styles/global";
import { themes } from "../src/Styles/index";

const customViewports = {
  ...MINIMAL_VIEWPORTS,
  LaptopScreen: {
    name: "Laptop Screen",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
  LargeScreen: {
    name: "Large Screen",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
};

const allThemes = [{ ...themes.light }, { ...themes.dark }];
addDecorator(withThemesProvider(allThemes), ThemeProvider);

export const decorators = [
  (Story) => (
    <>
      <StorybookGlobalStyle />
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
};
