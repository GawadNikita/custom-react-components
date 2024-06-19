import { useState } from "react";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import ModalBody from "../components/Modal/ModalBody";
import ModalFooter from "../components/Modal/ModalFooter";
import ModalTitle from "../components/Modal/ModalTitle";
import { ROUTES } from "../routes.constant";

function ModalPage() {
  const [modalVisibile, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <h2>{ROUTES.COMPONENTS.MODAL.title}</h2>

      <div>
        <h3>Demo of modal </h3>
        <Button label="Open modal" variant="primary" onClick={showModal} />
      </div>

      <Modal visible={modalVisibile} onClose={hideModal}>
        <ModalTitle title="Heading for modal" showCloseButton></ModalTitle>
        <ModalBody>
          <p>This is content for body</p>
          <p>This is paragraph 2</p>
          <p>This is another paragraph</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="no-theme" label="Cancel" onClick={hideModal} />
          <Button variant="primary" label="Proceed" />
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalPage;
