import { FC, useState } from "react";
import { Modal } from "react-bootstrap";
import { reSharePrescription } from "../../../../../../services/PrescriptionDetailsService";
import ToastUtils from "../../../../../../utils/ToastUtils";
import { AxiosError } from "axios";
interface ResharePresciptionModalProps {
  setShowReShare: (showImages: boolean) => void;
  showReShare: boolean | false;
  patientName: string | undefined;
  ptpId: string | undefined;
  mobileNumber: string | undefined;
}
const ResharePresciptionModal: FC<ResharePresciptionModalProps> = ({
  showReShare,
  setShowReShare,
  patientName,
  ptpId,
  mobileNumber,
}) => {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const handleReSharePrescription = () => {
    setShowLoader(true);
    reSharePrescription(ptpId!)
      .then(() => {
        setShowLoader(false);
        ToastUtils.success("Bitly send Successfully");
        setShowReShare(false);
      })
      .catch((rej) => {
        ToastUtils.error("Something went wrong");
        const err = rej as AxiosError;
      });
  };
  return (
    <Modal
      backdrop="static"
      centered
      show={showReShare}
      onHide={() => {
        setShowReShare(false);
      }}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Reshare Prescription
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="">
            <div>Patient : {patientName}</div>
            <div>Mobile Number : {mobileNumber}</div>
            <div>Rx prescription will be send with this patient</div>
          </div>
          <div className="row d-flex justify-content-around mt-2">
            <div className="col-5">
              <div className="row">
                <button
                  className="btn btn-outline-danger "
                  onClick={() => {
                    setShowReShare(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
            <div className="col-5">
              <div className="row">
                {showLoader ? (
                  <button className="btn  btn-success">
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </button>
                ) : (
                  <button
                    className="btn  btn-success"
                    onClick={handleReSharePrescription}
                  >
                    Send
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ResharePresciptionModal;
