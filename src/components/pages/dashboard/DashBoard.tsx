import { FC } from "react";
import { DoctorWelcomeCard } from "./DoctorWelcomeCard";
import TextAndGrapRadioButtons from "./TextAndGrapRadioButtons";
import { Outlet } from "react-router-dom";
import DashBoardDropDown from "../pagesutility/DashBoardDropDown";
import dashboardStore from "../../../middleware/dashboardStore";
import DashboardFromAndTillDate from "../pagesutility/DashboardFromAndTillDate";
import { useDashboardDetails } from "../../../hooks/useDashboardDataHelper";

const DashBoard: FC = () => {
  const { refetch } = useDashboardDetails();

  const { setDate, startDate, endDate, setDuration, duration } =
    dashboardStore();
  const handleOkClick = (startDate: string | null, endDate: string | null) => {
    setDate(startDate, endDate);
  };

  const clear = () => {
    setDate(null, null);
    setDuration("MONTH");
    if (duration === "CUSTOM") {
      refetch();
    }
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row mt-3">
          <div className="row text-purple d-flex align-items-end">
            <div className="col fs-3 fw-bolder">Dashboard</div>
            <div className="col">
              <TextAndGrapRadioButtons />
            </div>
            <div className="col">
              <DashboardFromAndTillDate
                initialStartDate={startDate}
                initialEndDate={endDate}
                handleOkClick={handleOkClick}
                reset={clear}
              />
            </div>
            <div className="col">
              <DashBoardDropDown />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col">
              <DoctorWelcomeCard show={true} />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
