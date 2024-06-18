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
import LeadCategoryDetailsDTO from "../../../../../model/dashboard/LeadCategoryDetailsDTO";
import { useDashboardDetails } from "../../../../../hooks/useDashboardDataHelper";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const LeadSharedGraph: FC = () => {
  // below text will be displayed when hovered on i icon
  const infoText =
    "map your Partners viz. Chemist, pathology etc & then Tick tem through the Rx-Paper for referring Patients to your Partners.Once done this report will be visible";

  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();

  const leadCagetoryList = map
    ?.get(duration)
    ?.get(CategoryEnum.LeadCategoryDetailsDTO);

  const data: LeadCategoryDetailsDTO[] =
    (leadCagetoryList as LeadCategoryDetailsDTO[]) || [];

  // This array are for vertical bar grap represent their corresponding lead shared status
  const labelsOfBars = ["Rx Shared", "Accepted", "Rejected", "Expired"];

  //This array is for coloring each individual verical bar
  const bgColorsOfBar = [
    "rgba(102, 204, 179, 1)",
    "rgba(108, 93, 211, 1)",
    "rgba(255, 154, 154, 1)",
    "rgba(120, 161, 222, 1)",
  ];

  const leadSharedGraphData = {
    labels: data.map((item) => item.category),
    datasets: labelsOfBars.map((label, index) => ({
      label,
      data: data.map((item) => {
        switch (label) {
          case "Rx Shared":
            return item.sharedLeadsCount || 0;
          case "Accepted":
            return item.acceptedLeadsCount || 0;
          case "Rejected":
            return item.rejectedLeadsCount || 0;
          case "Expired":
            return item.expiredLeadsCount || 0;
          default:
            return 0;
        }
      }),
      backgroundColor: bgColorsOfBar[index % bgColorsOfBar.length],
      borderColor: "black",
    })),
  };

  console.log("leadSharedGraphData1");
  console.log(leadSharedGraphData);

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
            <h3>Leads Shared</h3>
          </div>
          <div className="row" style={{ overflowX: "auto", width: "100%" }}>
            <div style={{ minWidth: "100%" }}>
              <Bar data={leadSharedGraphData}></Bar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadSharedGraph;

/*

------------FOR REFERENCE-----------
 
// this is the sample json that will be passed to data in Bar chart


{
    "labels": [
        "Ayurveda Hospital",
        "Blood Bank",
        "Dietician",
        "Homeopathy Doctor",
        "Hospital",
        "Nurse",
        "Optician",
        "Pathology",
        "Pharmacy",
        "Physiotherapist",
        "Radiology",
        "Rehab Centre"
    ],
    "datasets": [
        {
            "label": "Rx Shared",
            "data": [14, 19, 14, 14, 30, 16, 13, 24, 0, 25, 7, 8],
            "backgroundColor": "rgba(102, 204, 179, 1)",
            "borderColor": "black"
        },
        {
            "label": "Accepted",
            "data": [5, 5, 4, 4, 5, 3, 4, 12, 11, 12, 2, 3],
            "backgroundColor": "rgba(108, 93, 211, 1)",
            "borderColor": "black"
        },
        {
            "label": "Rejected",
            "data": [3, 4, 5, 2, 5, 2, 4, 7, 11, 11, 3, 4],
            "backgroundColor": "rgba(255, 154, 154, 1)",
            "borderColor": "black"
        },
        {
            "label": "Expired",
            "data": [0, 0, 0, 0, 18, 0, 0, 30, 298, 50, 2, 0],
            "backgroundColor": "rgba(120, 161, 222, 1)",
            "borderColor": "black"
        }
    ]
}



*/
