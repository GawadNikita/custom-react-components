import React from "react";
import { ModalTitleInterface } from "../../interface/modal.interface";

const ModalTitle = (props: ModalTitleInterface) => {
  return (
    <>
      <div className="modal-header">
        <h3>{props.title}</h3>
        {props.showCloseButton && (
          <span className="material-icon material-symbols-outlined">close</span>
        )}
      </div>
    </>
  );
};
export default ModalTitle;
