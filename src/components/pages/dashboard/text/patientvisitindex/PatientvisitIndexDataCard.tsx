import { FC } from "react";
import PatientVisitIndexDTO from "../../../../../model/dashboard/PatientVisitIndexDTO";

const PatientvisitIndexDataCard: FC<{ data: PatientVisitIndexDTO }> = ({
  data,
}: {
  data: PatientVisitIndexDTO;
}) => {
  return (
    <>
      <div className="container-fluid text-purple">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="row border-bottom">
            <div className="col text-center fw-bolder p-2">1</div>
            <div className="col text-center fw-bolder p-2">
              {data.oneVisitCount || 0}
            </div>
          </div>
          <div className="row border-bottom p-1">
            <div className="col text-center fw-bolder p-2">2</div>
            <div className="col text-center fw-bolder p-2">
              {data.twoVisitCount || 0}
            </div>
          </div>
          <div className="row border-bottom p-1">
            <div className="col text-center fw-bolder p-2">3-5</div>
            <div className="col text-center fw-bolder p-2">
              {data.threeToFiveVisitCount || 0}
            </div>
          </div>
          <div className="row border-bottom p-1">
            <div className="col text-center fw-bolder p-2">5-9</div>
            <div className="col text-center fw-bolder p-2">
              {data.fiveToNineVisitCount || 0}
            </div>
          </div>
          <div className="row border-bottom p-1">
            <div className="col text-center fw-bolder p-2">10+</div>
            <div className="col text-center fw-bolder p-2">
              {data.greaterThanTenVisitCount || 0}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientvisitIndexDataCard;
