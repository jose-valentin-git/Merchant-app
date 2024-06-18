import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ROUTES from "./routes";

function ValidateCookies() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <Modal
        onHide={() => setShow(false)}
        show={show}
        scrollable
        centered
        size={"lg"}
      >
        <Modal.Header closeButton>
          <Modal.Title>Session Expire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Re-Login</h3>
          <button
            className="btn btn-primary w-100"
            onClick={() => navigate(ROUTES.login)}
          >
            OK
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ValidateCookies;
