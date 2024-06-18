import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import dashboardStore from "../../../../middleware/dashboardStore";
import CategoryEnum from "../../../../model/dashboard/enums/CategoryEnum";

import FollowUpConversionDTO from "../../../../model/dashboard/FollowUpConversionDTO";
import { useDashboardDetails } from "../../../../hooks/useDashboardDataHelper";
const FollowUpConversionGraph: FC = () => {
  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const followUpconversionList = map
    ?.get(duration)
    ?.get(CategoryEnum.FollowUpConversionDTO);

  const data: FollowUpConversionDTO | null =
    ((followUpconversionList &&
      followUpconversionList[0]) as FollowUpConversionDTO) || null;
  const followUpConversionData = {
    labels: ["Sent", "Fullfilled"],
    datasets: [
      {
        label: "Follow Up Conversion",
        data: [data?.followUpSentCount, data?.followUpFulfilledCount],
        backgroundColor: ["rgba(249, 148, 148, 1)", "rgba(108, 93, 211, 1)"],
        hoverOffset: 2,
        borderColor: "rgba(255, 255, 247,1)",
      },
    ],
  };
  return (
    <>
      <div className="container-fluid g-xxl-4 g-md-0">
        <div className="shadow rounded-3 p-2">
          <div className="row">
            <div className="col d-flex justify-content-end">
              <button
                className="btn btn-hover border-palepurple"
                onClick={() => {
                  alert("show graph");
                }}
              >
                view
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex align-items-center flex-column ">
              <div className="text-purple">
                <h4 className="fs-3 fw-bolder">Follow Up Conversion Graph</h4>
              </div>
              <div>
                <Doughnut
                  data={followUpConversionData}
                  style={{ maxWidth: "45vw", maxHeight: "45vh" }}
                ></Doughnut>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className=" d-flex align-items-center justify-content-around"
              style={{ color: "rgba(249, 148, 148, 1)" }}
            >
              <p className="fs-5 fw-bolder">sent</p>
              <p className="fs-5 fw-bolder">{data?.followUpSentCount}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div
              className=" d-flex align-items-center justify-content-around"
              style={{ color: "rgba(108, 93, 211, 1)" }}
            >
              <p className="fs-5 fw-bolder">Fullfilled</p>
              <p className="fs-5 fw-bolder">{data?.followUpFulfilledCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUpConversionGraph;
