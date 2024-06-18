import { FC } from "react";
import CategoryEnum from "../../../../../model/dashboard/enums/CategoryEnum";
import dashboardStore from "../../../../../middleware/dashboardStore";
import FollowUpConversionDTO from "../../../../../model/dashboard/FollowUpConversionDTO";
import { useDashboardDetails } from "../../../../../hooks/useDashboardDataHelper";

const FollowUpConversion: FC = () => {
  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const totalRxList = map
    ?.get(duration)
    ?.get(CategoryEnum.FollowUpConversionDTO);

  const data: FollowUpConversionDTO | null =
    ((totalRxList && totalRxList[0]) as FollowUpConversionDTO) || null;

  return (
    <>
      <div className="contianer-fluid mt-3 text-purple ">
        <div className="shadow rounded-3 p-3">
          <div className="row m-1 p-2">
            <div className="d-flex align-items-center justify-content-between">
              <div className="col">
                <div className="fs-3 fw-bolder">Follow Up Conversion</div>
              </div>
              <div className="col">
                <div className="d-flex flex-wrap align-items-center justify-content-evenly">
                  <div className="fs-3 fw-bolder">Sent</div>
                  <div className="fs-3 fw-bolder p-2 rounded-3 w-25 text-center bg-palewhite border">
                    {data?.followUpSentCount || 0}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className=" d-flex align-items-center justify-content-evenly">
                  <div>
                    <div className="fs-3 fw-bolder">Fullfilled</div>
                  </div>
                  <div className="fs-3 fw-bolder p-2 rounded-3 w-25 text-center bg-palewhite border">
                    {data?.followUpFulfilledCount || 0}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUpConversion;
