import { FC, useState } from "react";
import FollowUpDataCard from "./FollowUpDataCard";
import InformationButton from "../../../../../utils/InformationButton";
import CategoryEnum from "../../../../../model/dashboard/enums/CategoryEnum";
import FollowUpVisitsDTO from "../../../../../model/dashboard/FollowUpVisitsDTO";
import { DropDownSelectedDTO } from "../../../../../model/dashboard/DropDownSelectedDTO";
import { useDashboardDetails } from "../../../../../hooks/useDashboardDataHelper";
import DashboardFollowUpVisitsInfo from "./DashboardFollowUpVisitsInfo";
const FollowingUpVisits: FC = () => {
  const infoText =
    'If you write days in "Visit After" on your Rx Paper,you will be able to see this Report';

  const [activeButton, setActiveButton] =
    useState<DropDownSelectedDTO>("TODAY");

  const { data: map } = useDashboardDetails();

  const followUpVisitsList = map
    ?.get(activeButton)
    ?.get(CategoryEnum.FollowUpVisitsDTO);

  const data: FollowUpVisitsDTO[] =
    (followUpVisitsList as FollowUpVisitsDTO[]) || [];
  return (
    <div className="container-fluid ">
      <div className="shadow rounded-3 p-2 ">
        <div className="row">
          <div className="col-md-3">
            <h3 className="text-purple">Follow up visits</h3>
          </div>
          <div className="col-md-5">
            <div className="row d-flex align-items-center justify-content-evenly">
              <button
                className={`${
                  activeButton === "TODAY" ? "bg-purple text-light" : ""
                } btn col-5 btn-hover border text-center rounded-3`}
                onClick={() => {
                  setActiveButton("TODAY");
                }}
              >
                Today
              </button>
              <button
                className={`${
                  activeButton === "TOMORROW" ? "bg-purple text-light" : ""
                } btn col-5 btn-hover  border rounded-3 `}
                onClick={() => {
                  setActiveButton("TOMORROW");
                }}
              >
                Tomorrow
              </button>
            </div>
          </div>
          <div className="col">
            <InformationButton text={infoText} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="row  d-flex align-items-center justify-content-center">
            <div className="col fw-bolder text-center">Name</div>
            <div className="col fw-bolder text-center">Phone No</div>
            <div className="col fw-bolder text-center">Upcoming Visit</div>
            <div className="col fw-bolder text-center">Last Rx data</div>
            <div className="col fw-bolder text-start">Last Rx</div>
            <div>
              <hr className="mt-3" />
            </div>
          </div>
          <div className="row">
            {data.length !== 0 ? (
              <div
                className="container overflow-y-auto"
                style={{ maxHeight: "60vh" }}
              >
                <div className="col ">
                  {data.map((followUpVisits, i) => (
                    <FollowUpDataCard key={i} data={followUpVisits} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="col">
                <DashboardFollowUpVisitsInfo />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowingUpVisits;
