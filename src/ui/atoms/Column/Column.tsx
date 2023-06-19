import { PropsWithChildren } from "react";
import * as Styled from "./styles";

type Props = PropsWithChildren<Styled.StyleProps>;

const Column = ({ children, ...props }: Props): JSX.Element => {
  return <Styled._Column {...props}>{children}</Styled._Column>;
};

export default Column;
