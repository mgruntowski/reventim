import { ThemeProvider } from "styled-components";

import { ModalProvider } from "contexts";
import { GlobalStyle, theme } from "styles";
import { Main } from "ui/templates";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ModalProvider>
          <Main>
            <Component {...pageProps} />
          </Main>
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}
