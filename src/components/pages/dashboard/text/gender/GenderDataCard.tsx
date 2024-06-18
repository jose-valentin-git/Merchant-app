import { FC } from "react";
import GenderPercentageCountDTO from "../../../../../model/dashboard/GenderPercentageCountDTO";

const GenderDataCard: FC<{ data: GenderPercentageCountDTO }> = ({
  data,
}: {
  data: GenderPercentageCountDTO;
}) => {
  return (
    <>
      <div className="contianer-fluid text-purple">
        <div className="row mt-3 p-4 d-flex align-items-center justify-content-center">
          <div className="row border-bottom">
            <div className="col text-start fw-bolder">{data.gender}</div>
            <div className="col text-start fw-bolder">{data.count}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenderDataCard;
