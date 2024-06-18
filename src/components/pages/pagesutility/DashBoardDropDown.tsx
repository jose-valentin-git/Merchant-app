import { FC, useEffect } from "react";
import dashboardStore from "../../../middleware/dashboardStore";
import { DropDownSelectedDTO } from "../../../model/dashboard/DropDownSelectedDTO";

const DashBoardDropDown: FC = () => {
  const { duration, setDuration } = dashboardStore();

  const handleOptionChange = (v: string) => {
    const selectedValue = v as DropDownSelectedDTO;
    setDuration(selectedValue);
  };

  useEffect(() => {
    handleOptionChange(duration);
  }, []);

  return (
    <>
      <div className="container d-flex g-0 justify-content-center">
        <div className="row w-100">
          <select
            className="form-select"
            aria-label="Default select example"
            value={duration}
            onChange={(e) => handleOptionChange(e.target.value)}
          >
            {/* todo */}
            <option value="TODAY">Today</option>
            <option value="YESTERDAY">Yesterday</option>
            <option value="WEEK">Week</option>
            <option value="MONTH">Month</option>
            <option value="YEAR">Year</option>
            <option value="LIFETIME">Lifetime</option>
            <option hidden={duration !== "CUSTOM"} value="CUSTOM">
              Custom
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default DashBoardDropDown;
