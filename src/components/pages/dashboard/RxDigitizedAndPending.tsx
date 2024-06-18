import { FC } from "react";
import dashboardStore from "../../../middleware/dashboardStore";
import CategoryEnum from "../../../model/dashboard/enums/CategoryEnum";
import TotalDigitizedRxDTO from "../../../model/dashboard/TotalDigitizedRxDTO";
import { useDashboardDetails } from "../../../hooks/useDashboardDataHelper";

const RxDigitizedAndPending: FC = () => {
  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const totalRxList = map?.get(duration)?.get(CategoryEnum.TotalDigitizedRxDTO);

  const data: TotalDigitizedRxDTO | null =
    ((totalRxList && totalRxList[0]) as TotalDigitizedRxDTO) || null;

  return (
    <>
      <div className="container text-purple">
        <div className="row">
          <div className="col">
            <div className="shadow border-palepurple p-3 rounded-2 d-flex align-items-center justify-content-around">
              <div className="col text-center">
                <p className="fs-4">Total Rx Digitized</p>
              </div>
              <div className="col">
                <p
                  className="fs-4 text-center rounded-4 p-2 border"
                  style={{ backgroundColor: "#F4F2FF" }}
                >
                  {data?.totalDigitizedRxCount || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RxDigitizedAndPending;
