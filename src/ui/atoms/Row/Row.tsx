import { PropsWithChildren } from "react";

import * as Styled from "./styles";

type Props = PropsWithChildren<Styled.StyleProps>;

const Row = ({ children, ...props }: Props): JSX.Element => {
  return <Styled._Row {...props}>{children}</Styled._Row>;
};

export default Row;
