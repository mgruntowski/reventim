import { ReactNode, useContext } from "react";

import { ModalContext } from "contexts";
import { ModalProps } from "ui/molecules/Modal";

type UseModal = {
  openModal: (content: ReactNode, props: Omit<ModalProps, "onClose">) => void;
  closeModal: () => void;
};

export default function useModal(): UseModal {
  const modal = useContext(ModalContext) as UseModal;

  if (!modal) {
    throw new Error("Modal should be used within a ModalProvider");
  }

  return modal;
}
