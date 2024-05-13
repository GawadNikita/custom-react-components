import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalInterface } from "../../interface/modal.interface";
import "./Modal.scss";
const Modal = (props: ModalInterface) => {
  const dialog: any = useRef();
  const modalClassname = `modal ${props.className ? props.className : ""}`;
  const rootElement = document.getElementById("root") as HTMLElement;
  useEffect(() => {
    const modal: any = dialog.current;
    if (props.visible) {
      modal.showModal();
    }

    return () => modal.close();
  }, [props.visible]);
  return createPortal(
    <dialog ref={dialog} className={modalClassname}>
      {props.children}
    </dialog>,
    rootElement
  );
};

export default Modal;
