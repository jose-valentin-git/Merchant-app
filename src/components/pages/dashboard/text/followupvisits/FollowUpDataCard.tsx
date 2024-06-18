import { FC, useState } from "react";
import FileSVG from "../../../../../assets/FileSVG";
import FollowUpVisitsDTO from "../../../../../model/dashboard/FollowUpVisitsDTO";
import ViewPrescription from "../../../patients/presciption/ViewPrescription";
import DateUtils from "../../../../../utils/formatDate";
const FollowUpDataCard: FC<{ data: FollowUpVisitsDTO }> = ({
  data,
}: {
  data: FollowUpVisitsDTO;
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div className="continer-fluid text-purple">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col text-center fw-bolder">{data.patientName}</div>
          <div className="col text-center fw-bolder">{data.mobileNumber}</div>
          <div className="col text-center fw-bolder">
            {DateUtils.formatDisplayDate(data.visitDate)}
          </div>
          <div className="col text-center fw-bolder">
            {DateUtils.formatDisplayDate(data.lastRxDate)}
          </div>
          <div className="col d-flex justify-content-start">
            <div
              className="btn d-flex align-items-center"
              onClick={() => {
                setShow(!show);
              }}
            >
              {/* Viewing Rx functionality is pending */}
              <FileSVG />
              <div className="text-purple fw-bolder border-0 bg-white">
                View
              </div>
            </div>

            {show && (
              <ViewPrescription
                setShow={setShow}
                show={show}
                ptpId={data.lastPatientPrescriptionId}
              />
            )}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default FollowUpDataCard;
