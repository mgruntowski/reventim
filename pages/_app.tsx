import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "styles";
import { Main } from "ui/templates";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}
