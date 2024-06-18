import { FC, useState } from "react";
import { Link } from "react-router-dom";
import FileSVG from "../../../assets/FileSVG";
import PatientSVG from "../../../assets/PatientSVG";
import PatientDetailsDTO from "../../../model/PatientDetailsDTO";
import RightArrowButton from "../../../utils/buttons/RightArrowButton";
import ViewPrescription from "./presciption/ViewPrescription";
import DateUtils from "../../../utils/formatDate";
interface ViewProps {
  mediaId: number;
  show: boolean;
}

const ViewButton: FC<ViewProps> = () => {
  return (
    <div className="d-flex align-items-center me-5">
      <FileSVG />
      <button className="border-0 bg-white fw-bolder text-purple">View</button>
    </div>
  );
};
interface PatientDataCardProps {
  patient: PatientDetailsDTO;
  showFamilyPrescription: boolean | false;
}
const PatientDataCard: FC<PatientDataCardProps> = ({
  patient,
  showFamilyPrescription,
}) => {
  const [show, setShow] = useState(false);
  const handleViewPrescription = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row text-start my-4 border-bottom">
          <div className="col-3 d-flex align-items-center">
            <div className="col">
              <PatientSVG />
            </div>
            <div className="container-fluid overflow-x-hidden">
              <div className="col">
                <p className="mt-3 fw-bolder text-purple ">
                  {patient?.patientName}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className=" d-flex align-items-center justify-content-center flex-w-2">
              <p className="mt-3 fw-bolder text-purple fs-6 ">
                {patient?.mobileNumber}
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" d-flex align-items-center justify-content-cen-2">
              <p className="mt-3 fw-bolder text-purple fs-6">
                {DateUtils.formatDisplayDate(patient?.nextVisit)}
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" d-flex align-items-center justify-content-cen-2">
              <p className="mt-3 fw-bolder text-purple fs-6">
                {DateUtils.formatDisplayDate(patient?.lastRx)}
              </p>
            </div>
          </div>
          <div
            className={`${
              showFamilyPrescription
                ? "col d-flex align-items-center justify-content-center"
                : "justify-content-start col-2 p-0 "
            }`}
          >
            <div className="btn" onClick={handleViewPrescription}>
              <ViewButton mediaId={patient.mediaId} show={show} />
            </div>
            {show && (
              <ViewPrescription
                setShow={setShow}
                show={show}
                ptpId={patient.lastPtpId}
              />
            )}
            {showFamilyPrescription && (
              <Link
                to={`/patients/familyPrescription/${patient.patientId}`}
                className="d-flex "
              >
                <RightArrowButton
                  fillColor="#6C5DD3"
                  styleWidth="2.3em"
                  styleBackground="#F0EEFF"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default PatientDataCard;
