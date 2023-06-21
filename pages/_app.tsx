import { ThemeProvider } from "styled-components";

import { LoadingProvider, ModalProvider } from "contexts";
import { GlobalStyle, theme } from "styles";
import { Main } from "ui/templates";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoadingProvider>
          <ModalProvider>
            <Main>
              <Toaster position="top-right" />
              <Component {...pageProps} />
            </Main>
          </ModalProvider>
        </LoadingProvider>
      </ThemeProvider>
    </>
  );
}
