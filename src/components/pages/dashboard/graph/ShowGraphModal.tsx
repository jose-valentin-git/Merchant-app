import { FC, ReactNode } from "react";
import { Modal } from "react-bootstrap";
interface ShowGraphModalProps {
  showGraph: boolean;
  setShow: (param: boolean) => void;
  childComponent: ReactNode;
}
const ShowGraphModal: FC<ShowGraphModalProps> = ({
  showGraph,
  setShow,
  childComponent,
}) => {
  return (
    <>
      <Modal
        show={showGraph}
        onHide={() => {
          setShow(false);
        }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Total Rx Digitized
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{childComponent}</Modal.Body>
      </Modal>
    </>
  );
};

export default ShowGraphModal;
