import { FC } from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
ChartJs.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";
import dashboardStore from "../../../../middleware/dashboardStore";
import CategoryEnum from "../../../../model/dashboard/enums/CategoryEnum";
import FollowUpConversionDTO from "../../../../model/dashboard/FollowUpConversionDTO";
import { useDashboardDetails } from "../../../../hooks/useDashboardDataHelper";
const TotalRxDigitizedView: FC = () => {
  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const totalRxList = map
    ?.get(duration)
    ?.get(CategoryEnum.FollowUpConversionDTO);

  const totalRxDigitizedData: FollowUpConversionDTO | null =
    (totalRxList && (totalRxList[0] as FollowUpConversionDTO)) || null;
  const data = {
    labels: ["Total Rx digitized"],
    datasets: [
      {
        label: "Follow Up Conversion",
        data: [totalRxDigitizedData?.followUpSentCount],
        backgroundColor: ["rgba(249, 148, 148, 1)", "rgba(108, 93, 211, 1)"],
        hoverOffset: 2,
        borderColor: "rgba(255, 255, 247,1)",
      },
    ],
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-conten-center flex-column">
          <div>
            <p className="fs-3 fw-bolder">Total Rx Digitized</p>
          </div>
          <div>
            <Doughnut
              data={data}
              style={{ maxWidth: "45vw", maxHeight: "45vh" }}
            ></Doughnut>
          </div>
        </div>
        <div className="row my-3">
          <div className="">
            <div className="d-flex align-items-center justify-content-evenly">
              <div className="fs-5 fw-bolder">Total Rx Digitized</div>
              <div className="fs-5 fw-bolder bg-primary-subtle p-2 rounded-3">
                {totalRxDigitizedData?.followUpSentCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRxDigitizedView;
