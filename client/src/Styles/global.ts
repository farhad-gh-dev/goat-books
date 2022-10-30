import { createGlobalStyle, css } from "styled-components";
import { typography, screenSize } from "./index";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.text_14};
  margin: 0;
  padding: 0;

  ${screenSize.laptop} {
    font-size: ${typography.size.text_18};
  }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.bold};
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: ${typography.size.text_22};
  }
  h3 {
    font-size: ${typography.size.text_18};
  }

  ${screenSize.laptop} {
    h2 {
      font-size: ${typography.size.text_28};
    }
    h3 {
      font-size: ${typography.size.text_22};
    }
  }

  button,
  input,
  textarea,
  select {
    border: none;
    font-family: ${typography.type.primary};
  }

  button {
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    clear: both;
    margin-bottom: 1.25rem;
  }
`;

const AppBodyStyles = css`
  ${bodyStyles}
  color: ${(props) => props.theme.color.text_color};
  background-color: ${(props) => props.theme.color.background};

  hr {
    border-top: 1px solid ${(props) => props.theme.color.contrast};
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${AppBodyStyles}
  }
`;

export const StorybookGlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;
