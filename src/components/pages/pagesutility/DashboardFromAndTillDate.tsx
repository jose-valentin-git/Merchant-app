import { useState } from "react";
import useSideNavBarOpenStore from "../../store/SideNavBarOpenStore";
import ToastUtils from "../../../utils/ToastUtils";

interface Props {
  handleOkClick: (startDate: string | null, endDate: string | null) => void;
  reset: () => void;
  initialStartDate?: string | null;
  initialEndDate?: string | null;
}

const DashboardFromAndTillDate = ({
  handleOkClick,
  reset,
  initialStartDate,
  initialEndDate,
}: Props) => {
  const { isOpen } = useSideNavBarOpenStore();
  const [startDate, setStartDateState] = useState<string | null | undefined>(
    initialStartDate
  );
  const [endDate, setEndDateState] = useState<string | null | undefined>(
    initialEndDate
  );
  const onOkClick = () => {
    if (!startDate) {
      ToastUtils.error("Please select start date.");
      return;
    } else if (!endDate) {
      ToastUtils.error("Please select end date.");
      return;
    }
    handleOkClick(startDate, endDate);
  };

  const handleClearClick = () => {
    if (!startDate && !endDate) {
      return;
    }
    setStartDateState(null);
    setEndDateState(null);
    reset();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <form
            className={`d-flex align-items-baseline justify-content-end `}
            action=""
          >
            <div
              className={`${
                isOpen
                  ? "col-8 align-items-end justify-content-center flex-wrap"
                  : ""
              } d-flex  `}
            >
              <div
                className={`${
                  isOpen ? "col-5" : "col"
                } d-flex align-items-center me-2`}
              >
                <label className="me-2 fw-bold text-purple" htmlFor="from-date">
                  From
                </label>
                <input
                  type="date"
                  className="form-control w-75 form-control bg-secondary-subtle  rounded-1 "
                  name="fromDate"
                  value={startDate || ""}
                  onChange={(event) => {
                    setStartDateState(event.target.value);
                  }}
                />
              </div>
              <div
                className={`${
                  isOpen ? "col-4" : "col"
                } d-flex align-items-center `}
              >
                <label className="me-2 fw-bold text-purple" htmlFor="till-date">
                  To
                </label>
                <input
                  type="date"
                  className="form-control w-75 form-control bg-secondary-subtle rounded-1"
                  name="toDate"
                  value={endDate || ""}
                  onChange={(event) => {
                    setEndDateState(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className=" d-flex align-items-center justify-content-around">
              <div
                className={`col btn me-2 text-green border fw-bolder`}
                onClick={() => onOkClick()}
              >
                {/* <CorrectButtonSVG /> */}
                OK
              </div>
              <div
                className={`col btn text-red border fw-bolder`}
                onClick={handleClearClick}
              >
                {/* <WrongButtonSVG /> */}
                CLEAR
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardFromAndTillDate;
