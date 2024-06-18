import { FC } from "react";
import LeadCategoryDetailsDTO from "../../../../../model/dashboard/LeadCategoryDetailsDTO";

const LeadSharedDataCard: FC<{ data: LeadCategoryDetailsDTO }> = ({
  data,
}: {
  data: LeadCategoryDetailsDTO;
}) => {
  return (
    <>
      <div className="container-fluid text-purple">
        <div className="row  d-flex align-items-center justify-content-center">
          <div className="col text-center fw-bolder">{data.category}</div>
          <div className="col text-center fw-bolder">
            {data?.sharedLeadsCount || 0}
          </div>
          <div className="col text-center fw-bolder">
            {data?.acceptedLeadsCount || 0}
          </div>
          <div className="col text-center fw-bolder">
            {data?.rejectedLeadsCount || 0}
          </div>
          <div className="col text-center fw-bolder">
            {data?.expiredLeadsCount || 0}
          </div>
          {/* <div className="col text-center fw-bolder">0</div> */}
        </div>
        <hr />
      </div>
    </>
  );
};

export default LeadSharedDataCard;
