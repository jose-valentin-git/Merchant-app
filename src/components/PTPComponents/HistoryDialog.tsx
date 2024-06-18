import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import usePatientDataParamStore from "../store/patientDataParamsStore";
import PatientGrid from "../pages/patients/PatientGrid";

const HistoryDialog: React.FC<{
  show: boolean;
  setShow: (param: boolean) => void;
  mobileNumberRef?: React.MutableRefObject<string>;
}> = ({ show, setShow, mobileNumberRef }) => {
  const [mobileNumber, setMobileNumber] = useState<string>();
  const { setSearchParams } = usePatientDataParamStore();
  useEffect(() => {
    if (mobileNumberRef?.current) {
      setMobileNumber(mobileNumberRef.current);
      setSearchParams(mobileNumberRef.current);
    }
    return () => {
      // Reset the search params when the component is closed or unmounted
      setSearchParams("");
    };
  }, [mobileNumberRef, setSearchParams]);

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
          <Modal.Title>History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PatientGrid showFamilyPrescription={false} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default HistoryDialog;
