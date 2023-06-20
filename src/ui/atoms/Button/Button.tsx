import { PropsWithChildren } from "react";

import * as Styled from "./styles";
import { withBoxProps } from "hocs";

type Props = PropsWithChildren<
  {
    className?: string;
    onClick: () => void;
  } & Styled.StyleProps
>;

const Button = ({ onClick, children, ...props }: Props): JSX.Element => {
  return (
    <Styled._Button type="button" onClick={onClick} {...props}>
      {children}
    </Styled._Button>
  );
};

export default withBoxProps(Button);
