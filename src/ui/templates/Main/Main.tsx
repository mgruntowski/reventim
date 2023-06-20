import { PropsWithChildren } from "react";
import { Header } from "ui/organisms";

import * as Styled from "./styles";

type Props = PropsWithChildren<{}>;

const Main = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <Styled._MainContainer>{children}</Styled._MainContainer>
    </>
  );
};

export default Main;
