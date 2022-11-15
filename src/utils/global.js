import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
  *:focus {
  outline: 0;
  outline: none;
  }
  html {
    box-sizing: border-box;
    --color-white: ${(props) => props.theme.colors.white};
    --color-black: ${(props) => props.theme.colors.black};
    --color-gray: ${(props) => props.theme.colors.gray};
    --color-grayDark: ${(props) => props.theme.colors.grayDark};
    --color-teal: ${(props) => props.theme.colors.teal};
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }
  a, button {
    cursor: pointer;
  }
  a, input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
  
`;
