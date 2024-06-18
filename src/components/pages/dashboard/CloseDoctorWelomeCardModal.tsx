import { FC } from "react";
import { Modal } from "react-bootstrap";
import CookieUtils from "../../../utils/CookieUtils";
interface CloseDoctorWelomeCardModalProps {
  showCloseModal: boolean;
  setShowCloseModal: (show: boolean) => void;
  setVisible: (visible: boolean) => void;
}
const CloseDoctorWelomeCardModal: FC<CloseDoctorWelomeCardModalProps> = ({
  showCloseModal,
  setShowCloseModal,
  setVisible,
}) => {
  return (
    <Modal
      size="sm"
      centered
      show={showCloseModal}
      onHide={() => setShowCloseModal(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="text-center">Don't Show Again</div>
      </Modal.Body>

      <div className="d-flex justify-content-end p-2">
        <button
          // variant="primary"
          className="border border-none py-1 bg-purple text-white rounded rounded-1 px-2"
          onClick={() => {
            setVisible(false);
            CookieUtils.setDashboardBannerVisible(false);
          }}
        >
          Yes
        </button>
      </div>
    </Modal>
  );
};

export default CloseDoctorWelomeCardModal;
