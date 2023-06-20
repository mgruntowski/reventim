import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = PropsWithChildren<{}>;

const Portal = ({ children }: Props): JSX.Element => {
  const mount = document.getElementById("portal-root");
  const element = document.createElement("div");

  useEffect(() => {
    mount?.appendChild(element);

    return () => {
      mount?.removeChild(element);
    };
  }, [element, mount]);

  return createPortal(children, element);
};

export default Portal;
