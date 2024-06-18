import { FC } from "react";
import AgeDTO from "../../../../../model/dashboard/AgeDTO";
import ProgressBar from "react-bootstrap/ProgressBar";
const AgeDataCard: FC<{ data: AgeDTO; sum: number }> = ({
  data,
  sum,
}: {
  data: AgeDTO;
  sum: number;
}) => {
  const getPercentage = (value?: number | null) => {
    return Math.round(((value || 0) / sum) * 100) || 0;
  };

  const getLabel = (value?: number | null) => {
    const percntage = getPercentage(value);
    if (percntage < 10) return percntage;
    return percntage + " %";
  };

  return (
    <div className="contianer-fluid text-purple fw-bolder">
      <div className="container-fluid">
        <div className="row mt-3 p-3 d-flex align-items-center justify-content-center">
          <div className="col-3">1-10</div>
          <div className="col">
            <ProgressBar
              className="rounded-0"
              variant="purple"
              now={getPercentage(data.oneToTenCount) || 0}
              label={getLabel(data.oneToTenCount)}
            />
          </div>
          <div className="col-2  d-flex justify-content-end">
            {data.oneToTenCount || 0}
          </div>
        </div>
        <div className="row mt-3 p-3 d-flex align-items-center justify-content-center">
          <div className="col-3">11-18</div>
          <div className="col">
            <ProgressBar
              className="rounded-0"
              variant="purple"
              now={getPercentage(data.elevenToEighteenCount) || 0}
              label={getLabel(data.elevenToEighteenCount)}
            />
          </div>
          <div className="col-2 d-flex justify-content-end">
            {data.elevenToEighteenCount || 0}
          </div>
        </div>
        <div className="row mt-3 p-3 d-flex align-items-center justify-content-center">
          <div className="col-3">19-40</div>
          <div className="col">
            <ProgressBar
              className="rounded-0"
              variant="purple"
              now={getPercentage(data.nineteenToFourthCount) || 0}
              label={getLabel(data.nineteenToFourthCount)}
            />
          </div>
          <div className="col-2 d-flex justify-content-end">
            {data.nineteenToFourthCount || 0}
          </div>
        </div>
        <div className="row mt-3 p-3 d-flex align-items-center justify-content-center">
          <div className="col-3">41-60</div>
          <div className="col">
            <ProgressBar
              className="rounded-0"
              variant="purple"
              now={getPercentage(data.fortyOneToSixthCount) || 0}
              label={getLabel(data.fortyOneToSixthCount) || 0}
            />
          </div>
          <div className="col-2 d-flex justify-content-end">
            {data.fortyOneToSixthCount || 0}
          </div>
        </div>
        <div className="row mt-3 p-3 d-flex align-items-center justify-content-center">
          <div className="col-3">{">"} 60</div>
          <div className="col">
            <ProgressBar
              className="rounded-0"
              variant={"purple"}
              now={getPercentage(data.greaterThanSixtyCount) || 0}
              label={getLabel(data.greaterThanSixtyCount)}
            />
          </div>
          <div className="col-2 d-flex justify-content-end">
            {data.greaterThanSixtyCount || 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeDataCard;
