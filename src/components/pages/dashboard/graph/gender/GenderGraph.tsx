import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import { ProgressBar } from "react-bootstrap";
import Colors from "../../../../../utils/Colors";
import InformationButton from "../../../../../utils/InformationButton";
import dashboardStore from "../../../../../middleware/dashboardStore";
import CategoryEnum from "../../../../../model/dashboard/enums/CategoryEnum";
import GenderPercentageCountDTO from "../../../../../model/dashboard/GenderPercentageCountDTO";
import { useDashboardDetails } from "../../../../../hooks/useDashboardDataHelper";
const GenderGraph: FC = () => {
  const infoText = "Tick Patient's Gender on Rx Paper to view this report";
  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const genderList = map
    ?.get(duration)
    ?.get(CategoryEnum.GenderPercentageCountDTO);

  const data: GenderPercentageCountDTO[] =
    (genderList as GenderPercentageCountDTO[]) || [];
  const genderGraphData = {
    labels: ["Male", "Female", "Undisclosed"],
    datasets: [
      {
        label: "Follow Up Conversion",
        data: [data[1]?.count, data[2]?.count, data[0]?.count],
        backgroundColor: [Colors.gold, Colors.green, Colors.red],
        hoverOffset: 2,
        borderColor: "rgba(255, 255, 247,1)",
      },
    ],
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row shadow rounded-3 d-flex align-items-center">
          <div className="col d-flex justify-content-end">
            <button
              className="btn btn-hover border-palepurple"
              onClick={() => {
                alert("show graph");
              }}
            >
              view
            </button>
            <div>
              <InformationButton text={infoText} />
            </div>
          </div>
          <div className="row">
            <h3 className="text-purple">Gender</h3>
          </div>
          <div className="col">
            <Doughnut
              data={genderGraphData}
              style={{ maxWidth: "45vw", maxHeight: "45vh" }}
            ></Doughnut>
          </div>
          <div className="col">
            <div className="row d-flex align-items-center justify-content-center">
              <div>
                <div className=" ">
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fs-5 fw-bolder">Male</p>
                      <p className="fs-5 fw-bolder">
                        {data[1]?.percentage || 0}%
                      </p>
                    </div>
                    <ProgressBar
                      now={data[1]?.percentage || 0}
                      variant={"gold"}
                    />
                  </div>
                  <div className="my-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fs-5 fw-bolder">Female</p>
                      <p className="fs-5 fw-bolder">
                        {data[2]?.percentage || 0}%
                      </p>
                    </div>
                    <ProgressBar
                      visuallyHidden
                      now={data[2]?.percentage || 0}
                      variant={"green"}
                    />
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fs-5 fw-bolder">Undisclosed</p>
                      <p className="fs-5 fw-bolder">
                        {data[0]?.percentage || 0}%
                      </p>
                    </div>
                    <ProgressBar
                      visuallyHidden
                      now={data[0]?.percentage || 0}
                      variant={"red"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row  ">
            <div className="d-flex align-items-center justify-content-around">
              <p className="fs-3 fw-bolder" style={{ color: Colors.gold }}>
                M : {data[1]?.count}
              </p>
              <p className="fs-3 fw-bolder" style={{ color: Colors.green }}>
                F : {data[2]?.count}
              </p>
              <p className="fs-3 fw-bolder" style={{ color: Colors.red }}>
                U : {data[0]?.count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenderGraph;
