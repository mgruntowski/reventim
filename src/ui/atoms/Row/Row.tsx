import { PropsWithChildren } from "react";

import { withBoxProps } from "hocs";

import * as Styled from "./styles";

type Props = PropsWithChildren<{ onClick?: () => void } & Styled.StyleProps>;

const Row = ({ children, ...props }: Props): JSX.Element => {
  return <Styled._Row {...props}>{children}</Styled._Row>;
};

export default withBoxProps(Row);
