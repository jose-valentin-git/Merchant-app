import { FC, useEffect, useState } from "react";
import ToastUtils from "../../../utils/ToastUtils";
import useSideNavBarOpenStore from "../../store/SideNavBarOpenStore";
import { DateStore } from "../../../middleware/filterDateStore";
import { StoreApi, UseBoundStore } from "zustand";

interface FromAndTillDateFilterProps {
  store: UseBoundStore<StoreApi<DateStore>>;
}
const FromAndTillDateFilter: FC<FromAndTillDateFilterProps> = ({ store }) => {
  const { isOpen } = useSideNavBarOpenStore();

  const [filterStartDate, setFilterStartDateState] = useState<string | null>(
    null
  );
  const [filterEndDate, setFilterEndDateState] = useState<string | null>(null);

  const { isDateFilter, setDates, clearDates } = store();

  useEffect(() => {
    if (!isDateFilter) {
      setFilterStartDateState(null);
      setFilterEndDateState(null);
    }
  }, [isDateFilter]);

  const onOkClick = () => {
    if (!filterStartDate) {
      ToastUtils.error("Please select start date.");
      return;
    } else if (!filterEndDate) {
      ToastUtils.error("Please select end date.");
      return;
    }

    setDates(filterStartDate, filterEndDate, true);
  };

  const handleClearClick = () => {
    if (!filterStartDate && !filterEndDate) {
      console.log("Returning");
      return;
    }

    setFilterStartDateState(null);
    setFilterEndDateState(null);
    clearDates();
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
                isOpen &&
                "col-8 align-items-end justify-content-center flex-wrap"
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
                  value={filterStartDate || ""}
                  max={new Date().toISOString().split("T")[0]} // Set max attribute to today's date
                  onChange={(event) => {
                    setFilterStartDateState(event.target.value);
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
                  value={filterEndDate || ""}
                  max={new Date().toISOString().split("T")[0]} // Set max attribute to today's date
                  onChange={(event) => {
                    setFilterEndDateState(event.target.value);
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
                onClick={() => handleClearClick()}
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

export default FromAndTillDateFilter;
