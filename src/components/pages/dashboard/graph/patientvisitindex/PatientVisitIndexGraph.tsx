import { FC } from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import InformationButton from "../../../../../utils/InformationButton";
import dashboardStore from "../../../../../middleware/dashboardStore";
import CategoryEnum from "../../../../../model/dashboard/enums/CategoryEnum";
import PatientVisitIndexDTO from "../../../../../model/dashboard/PatientVisitIndexDTO";
import { useDashboardDetails } from "../../../../../hooks/useDashboardDataHelper";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const PatientVisitIndexGraph: FC = () => {
  const infoText =
    "Capure correct mobile number of the Patient while writing Rx to view this report";

  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const patienVisitIndex = map
    ?.get(duration)
    ?.get(CategoryEnum.PatientVisitIndexDTO);

  const data: PatientVisitIndexDTO | null =
    ((patienVisitIndex && patienVisitIndex[0]) as PatientVisitIndexDTO) || null;
  const patientVisitIndexGraphData = {
    labels: ["1", "2", "3-5", "6-9", ">10"],
    datasets: [
      {
        label: "Number of  Repeat Visits by Patients",
        data: [
          data?.oneVisitCount,
          data?.twoVisitCount,
          data?.threeToFiveVisitCount,
          data?.threeToFiveVisitCount,
          data?.greaterThanTenVisitCount,
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
            <h3>Patient Visit Index</h3>
          </div>
          <div className="row">
            <Bar data={patientVisitIndexGraphData} options={options}></Bar>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientVisitIndexGraph;
