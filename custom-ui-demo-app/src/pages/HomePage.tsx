import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from "custom-react-components";
import { useState } from "react";

function HomePage() {
  const [modalVisibile, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus
        fringilla justo, non fermentum neque. Suspendisse aliquam felis justo,
        id cursus dolor egestas ac. Integer consequat, arcu vel facilisis
        malesuada, purus ex egestas risus, ac posuere velit felis eget urna.
        Suspendisse mollis leo tristique, laoreet odio vulputate, cursus elit.
        Integer egestas maximus metus, ut mattis ipsum tempor vel. Aliquam eget
        molestie purus, vel tristique arcu. Nam rhoncus lobortis lacinia.
      </p>
      <p>
        Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Vestibulum dolor quam, pellentesque a
        malesuada vitae, sodales sit amet massa. Sed vitae sem nec risus
        tincidunt iaculis. Aliquam semper dui nulla, ac accumsan ligula
        scelerisque fringilla. Aliquam eget laoreet mi. Donec massa arcu,
        fermentum sit amet neque cursus, volutpat scelerisque augue. Suspendisse
        tincidunt mauris orci, quis mattis quam rhoncus quis. Proin ut mauris
        nec elit auctor fringilla finibus sit amet urna. Suspendisse scelerisque
        vestibulum lorem vitae blandit. Vestibulum rutrum dolor nec ante mattis,
        ut molestie quam gravida.
      </p>
      <p>
        Nullam a consequat mauris. Fusce quis urna id nisl euismod interdum eu
        quis mi. Curabitur pharetra ligula sem, nec aliquet metus volutpat quis.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Integer rutrum, quam quis cursus accumsan, tellus
        lectus scelerisque ante, in varius est justo nec ipsum. Morbi libero
        enim, condimentum a elit a, lacinia fringilla eros. Pellentesque risus
        nulla, hendrerit et tellus in, vestibulum pulvinar arcu. Donec vitae
        vulputate nunc. Proin pellentesque sem et ante porta, a commodo nisi
        consequat. Ut sit amet ipsum lacus. Cras scelerisque id elit sed varius.
        Aenean eros ante, efficitur sed congue ac, pretium id ligula. Donec
        tempus justo ut pulvinar viverra.
      </p>
      <div className="button-wrapper text-right">
        <Button variant="primary" size="lg" label="Primary" />
        <Button variant="secondary" size="lg" label="Secondary" />
        <Button
          variant="no-theme"
          size="lg"
          label="Plain Button"
          onClick={showModal}
        />
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
export default HomePage;
