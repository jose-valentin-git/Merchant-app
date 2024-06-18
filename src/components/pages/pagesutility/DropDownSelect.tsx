import { FC, useEffect, useState } from "react";
import { DateStore } from "../../../middleware/filterDateStore";
import { StoreApi, UseBoundStore } from "zustand";
import DateUtils from "../../../utils/formatDate";
interface DropDownSelectProps {
  store: UseBoundStore<StoreApi<DateStore>>;
}
const DropDownSelect: FC<DropDownSelectProps> = ({ store }) => {
  const { setDates, isDateFilter } = store();
  const [selectedOption, setSelectedOption] = useState<string>("MONTH");

  useEffect(() => {
    if (isDateFilter) {
      setSelectedOption("CUSTOM");
    }
    if (!isDateFilter) {
      setSelectedOption("MONTH");
      handleOptionChange("MONTH");
    }
  }, [isDateFilter]);

  const handleOptionChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);

    const currentDate = new Date();
    let startDate: Date | null = null;
    let endDate: Date | null = null;

    switch (selectedValue) {
      case "TODAY":
        startDate = currentDate;
        endDate = currentDate;
        break;
      case "YESTERDAY":
        startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - 1);
        endDate = startDate;
        break;
      case "WEEK":
        startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - 7);
        endDate = currentDate;
        break;
      case "MONTH":
        startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - 30);
        endDate = currentDate;
        break;
      case "YEAR":
        startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - 365);
        endDate = currentDate;
        break;
      case "LIFETIME":
        // Set appropriate start and end dates for lifetime
        (startDate = null), (endDate = null);
        break;
      default:
        break;
    }

    setDates(
      DateUtils.formatDate(startDate),
      DateUtils.formatDate(endDate),
      false
    );
  };

  return (
    <>
      <div className="container d-flex g-0 justify-content-center">
        <div className="row w-100">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => handleOptionChange(e.target.value)}
            value={selectedOption} // Set selected option
          >
            <option value="TODAY">Today</option>
            <option value="YESTERDAY">Yesterday</option>
            <option value="WEEK">Week</option>
            <option value="MONTH">Month</option>
            <option value="YEAR">Year</option>
            <option value="LIFETIME">Lifetime</option>
            <option hidden value="CUSTOM">
              Custom
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default DropDownSelect;
