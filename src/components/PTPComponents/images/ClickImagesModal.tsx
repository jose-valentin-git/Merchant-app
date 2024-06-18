import { FC } from "react";
import { Modal } from "react-bootstrap";
interface ClickImagesModalProps {
  showImageModal: boolean;
  setShowImageModal: (showImageModal: boolean) => void;
}
const ClickImagesModal: FC<ClickImagesModalProps> = ({
  showImageModal,
  setShowImageModal,
}) => {
  return (
    <Modal
      size="lg"
      show={showImageModal}
      onHide={() => setShowImageModal(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Click image</Modal.Body>
    </Modal>
  );
};

export default ClickImagesModal;
