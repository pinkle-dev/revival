import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ $scroll: boolean }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto Flex", sans-serif !important;
    height: 100%;
    background: ${({ theme }) => theme.primaryBg};
    overflow: ${({ $scroll }) => ($scroll ? "hidden" : "auto")};
  }
  #root, html{
    height: 100%;
    scroll-behavior: smooth;
  }
  input {
    font-family: inherit;
    &::placeholder {
      font-family: inherit
    }
  }
  button {
    font-family: inherit;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
