import { FC } from "react";
import PatientDetailsDTO from "../../../../model/PatientDetailsDTO";
import PatientVisitDataCardLoader from "../../../loaders/patients/prescription/PatientVisitDataCardLoader";

interface PatientVisitDataCardProps {
  patient?: PatientDetailsDTO;
  isLoading: boolean;
}

const PatientVisitDataCard: FC<PatientVisitDataCardProps> = ({
  patient,
  isLoading,
}) => {
  return (
    <>
      <div className="container-fluid mt-2 g-0">
        <div className="shadow rounded-3 p-4">
          {/* <div className="row"> */}
          <div className="row p-3 rounded-3">
            <div className="d-flex p-2 align-items-center justify-content-center">
              <div className="col fw-bolder text-start">Name</div>
              <div className="col fw-bolder text-start">Phone number</div>
              <div className="col fw-bolder text-start">First Rx date</div>
              <div className="col fw-bolder text-start">Last Rx date</div>
              <div className="col fw-bolder text-start">Next Visit date</div>
            </div>
            {isLoading ? (
              <PatientVisitDataCardLoader />
            ) : (
              <div className="d-flex p-2 align-items-center justify-content-center text-purple">
                <div className="col fs-4 text-adjust">
                  {patient?.patientName}
                </div>
                <div className="col fs-4 text-adjust">
                  {patient?.mobileNumber}
                </div>
                <div className="col fs-4 text-adjust">{patient?.firstRx}</div>
                <div className="col fs-4 text-adjust">{patient?.lastRx}</div>
                <div className="col fs-4 text-adjust">{patient?.nextVisit}</div>
              </div>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default PatientVisitDataCard;
