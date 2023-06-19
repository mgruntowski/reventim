import { PropsWithChildren } from "react";

import * as Styled from "./styles";

type Props = PropsWithChildren<{}>;

const Button = ({ children }: Props): JSX.Element => {
  return <Styled._Button>{children}</Styled._Button>;
};

export default Button;
