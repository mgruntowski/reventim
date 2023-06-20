import { PropsWithChildren } from "react";

import * as Styled from "./styles";

export type ModalProps = PropsWithChildren<
  {
    title: string;
    onClose: () => void;
  } & Styled.StyleProps
>;

const Modal = ({
  title,
  children,
  onClose,
  ...props
}: ModalProps): JSX.Element => {
  return (
    <Styled._Backdrop>
      <Styled._Container {...props}>
        <Styled._Title variant={props.variant}>{title}</Styled._Title>

        <Styled._CloseButton variant={props.variant} onClick={onClose}>
          ×
        </Styled._CloseButton>

        {children}
      </Styled._Container>
    </Styled._Backdrop>
  );
};

export default Modal;
