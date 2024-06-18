import { FC } from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJs.register(ArcElement, Tooltip, Legend);
const PendingRxDoughNut: FC = () => {
  const data = {
    datasets: [
      {
        label: "Pending Rx",
        data: [75, 100],
        backgroundColor: ["rgba(249, 148, 148, 1)", "rgba(255, 256, 257, 1)"],
        hoverOffset: 2,
        borderColor: "rgba(255, 255, 247,1)",
      },
    ],
  };
  return (
    <>
      <div className="container-fluid text-purple">
        <div className="d-flex align-items-center justify-conten-center flex-column">
          <div className="">
            <p className="fs-3 fw-bolder">Pending Rx</p>
          </div>
          <div>
            <Doughnut
              data={data}
              style={{ maxWidth: "25vw", maxHeight: "25vh" }}
            ></Doughnut>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingRxDoughNut;
