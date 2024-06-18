import React, { useEffect } from "react";
import { Form, Modal, Row } from "react-bootstrap";

const MobileNumberDialog: React.FC<{
  show: boolean;
  setShow: (param: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  mobileNumberRef: React.MutableRefObject<string>;
}> = ({ show, setShow, inputRef, mobileNumberRef }) => {
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = mobileNumberRef.current;
    }
  }, []);

  if (!show) return;

  return (
    <>
      <Modal
        onHide={() => setShow(false)}
        show={show}
        scrollable
        centered
        size={"sm"}
      >
        <Modal.Header closeButton>
          <Modal.Title>Patient's Mobile Number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <input
              className="fs-1 fw-bolder text-center rounded rounded-2 border border-2"
              ref={inputRef}
              defaultValue={""}
              maxLength={10}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default MobileNumberDialog;
