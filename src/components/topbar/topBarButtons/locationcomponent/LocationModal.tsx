import { FC, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import LocationSVG from "../../../../assets/topbaricons/LocationSVG";
import ClinicLocationUtil from "../../../../utils/ClinicLocationUtils";
import CookieUtils from "../../../../utils/CookieUtils";
import clinicLocationStore from "../../../../middleware/clinicLocationStore";
import {
  getCLinicDetails,
  markClinisAsCurrent,
} from "../../../../services/ClinicService";
import Clinics from "../../../pages/profile/clinics/Clinics";
const LocationModal: FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const [markedClinic, setClinic] = useState<ClinicDTO | null>(null);
  const { markedClinic, setMarkedClinic } = clinicLocationStore();

  useEffect(() => {
    const markedClinic = CookieUtils.getMarkedClinic();
    if (markedClinic) {
      getCLinicDetails(markedClinic).then((clinicDTO) => {
        setMarkedClinic(clinicDTO);
      });
      return;
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        ClinicLocationUtil.markClinic(
          position.coords.latitude,
          position.coords.longitude
        ).then((res) => {
          if (res?.serverId) {
            markClinisAsCurrent(res.serverId);
            setMarkedClinic(res);
          }

          if (res.serverId) CookieUtils.setMarkedClinic(res.serverId);
        });
      });
    } else {
      alert("Geolocation is not available in your browser.");
    }
  }, []);

  return (
    <>
      <div className="col d-flex align-items-center justify-content-center">
        <button
          type="button"
          className={`${
            !markedClinic ? "bg-white" : "bg-green"
          } btn border position-relative`}
          onClick={() => setShow(!show)}
        >
          <LocationSVG />
          <span className="position-absolute top-100 start-50 translate-middle badge bg-purple btn-outline-primary">
            {markedClinic?.address.city}
          </span>
        </button>
      </div>

      {/* <div className="position-relative">
        <button
          type="button"
          className="ms-3 btn"
          style={{ backgroundColor: "white" }}
          onClick={handleShow}
        >
          <LocationSVG />
        </button>
        <p className="position-absolute top-50 start-50">
          {markedClinic?.address.city}
        </p>
      </div> */}

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your clinics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Clinics showAddClinic={false} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LocationModal;
