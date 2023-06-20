import { PropsWithChildren } from "react";

import * as Styled from "./styles";
import { withBoxProps } from "hocs";

type Props = PropsWithChildren<{
  className?: string;
  variant: keyof typeof Styled.buttonVariants;
  onClick: () => void;
}>;

const Button = ({
  className,
  onClick,
  variant,
  children,
}: Props): JSX.Element => {
  return (
    <Styled._Button
      className={className}
      type="button"
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Styled._Button>
  );
};

export default withBoxProps(Button);
