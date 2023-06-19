import { PropsWithChildren } from "react";
import { Header } from "ui/organisms";

type Props = PropsWithChildren<{}>;

const Main = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Main;
