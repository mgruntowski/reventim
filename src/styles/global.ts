import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-synthesis: none;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }

  * {
    font-family: 'Mukta', sans-serif;
  }

  button {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
  }

  h1 {
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
