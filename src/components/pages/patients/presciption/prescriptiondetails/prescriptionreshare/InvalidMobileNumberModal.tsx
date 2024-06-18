import { FC } from "react";
import { Modal } from "react-bootstrap";
interface InvalidMobileNumberModalProps {
  invalidMobileNumberModal: boolean;
  setShowInvalidMobileNumberModal: (invalidMobileNumberModal: boolean) => void;
}
const InvalidMobileNumberModal: FC<InvalidMobileNumberModalProps> = ({
  invalidMobileNumberModal,
  setShowInvalidMobileNumberModal,
}) => {
  return (
    <>
      <Modal
        show={invalidMobileNumberModal}
        centered
        onHide={() => setShowInvalidMobileNumberModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Invalid mobile number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="fw-bolder">
            Bitly canot be send to invalid mobile number
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InvalidMobileNumberModal;
