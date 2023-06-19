import { PropsWithChildren } from "react";

import * as Styled from "./styles";

type Props = PropsWithChildren<{
  variant: keyof typeof Styled.buttonVariants;
  onClick: () => void;
}>;

const Button = ({ onClick, variant, children }: Props): JSX.Element => {
  return (
    <Styled._Button variant={variant} onClick={onClick}>
      {children}
    </Styled._Button>
  );
};

export default Button;
