import React from "react";

const ModalFooter = (props: any) => {
  return (
    <>
      <div className="modal-footer">{props.children}</div>
    </>
  );
};

export default ModalFooter;
