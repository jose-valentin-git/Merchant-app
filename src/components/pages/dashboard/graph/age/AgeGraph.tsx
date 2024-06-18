import { FC } from "react";
import { Bar } from "react-chartjs-2";
import InformationButton from "../../../../../utils/InformationButton";
import dashboardStore from "../../../../../middleware/dashboardStore";
import CategoryEnum from "../../../../../model/dashboard/enums/CategoryEnum";
import AgeDTO from "../../../../../model/dashboard/AgeDTO";
import { useDashboardDetails } from "../../../../../hooks/useDashboardDataHelper";

const AgeGraph: FC = () => {
  const infoText = "Write Age on Rx paper to view this";
  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const ageList = map?.get(duration)?.get(CategoryEnum.AgeDTO);

  const data: AgeDTO | null = ((ageList && ageList[0]) as AgeDTO) || null;
  const ageGraphData = {
    labels: ["1-10", "11-18", "19-40", "41-60", ">60"],
    datasets: [
      {
        label: "Number of  Repeat Visits by Patients",
        data: [
          data?.oneToTenCount || 0,
          data?.elevenToEighteenCount || 0,
          data?.nineteenToFourthCount || 0,
          data?.fortyOneToSixthCount || 0,
          data?.greaterThanSixtyCount || 0,
        ],
        backgroundColor: "rgba(108, 93, 211, 1)",
        borderColor: "black",
        barRadius: 6,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    barThickness: 30,
  };
  return (
    <>
      <div className="container-fluid text-purple">
        <div className="row shadow">
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
            <h3>Age</h3>
          </div>
          <div className="row">
            <Bar data={ageGraphData} options={options}></Bar>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeGraph;
