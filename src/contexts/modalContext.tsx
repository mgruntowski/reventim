import {
  createContext,
  useCallback,
  useMemo,
  useState,
  ReactNode,
  PropsWithChildren,
} from "react";

import { Portal } from "ui/atoms";
import { Modal } from "ui/molecules";
import { ModalProps } from "ui/molecules/Modal";

const DEFAULT_MODAL_PROPS = {
  open: false,
  content: (<></>) as ReactNode,
  props: {
    title: "",
  },
};

export const ModalContext = createContext({});

export const ModalProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [modalProps, setModalProps] = useState(DEFAULT_MODAL_PROPS);

  const openModal = useCallback(
    (content: ReactNode, props: Omit<ModalProps, "onClose">) => {
      setModalProps({ open: true, content, props });
    },
    []
  );

  const closeModal = useCallback(() => {
    setModalProps(DEFAULT_MODAL_PROPS);
  }, []);

  const value = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}

      {modalProps.open && (
        <Portal>
          <Modal {...modalProps.props} onClose={closeModal}>
            {modalProps.content}
          </Modal>
        </Portal>
      )}
    </ModalContext.Provider>
  );
};
