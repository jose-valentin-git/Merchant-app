import { FC } from "react";
import AgeDataCard from "./AgeDataCard";
import InformationButton from "../../../../../utils/InformationButton";
import dashboardStore from "../../../../../middleware/dashboardStore";
import CategoryEnum from "../../../../../model/dashboard/enums/CategoryEnum";
import AgeDTO from "../../../../../model/dashboard/AgeDTO";
import { useDashboardDetails } from "../../../../../hooks/useDashboardDataHelper";
import AgeInfo from "./AgeInfo";

const Age: FC = () => {
  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const ageList = map?.get(duration)?.get(CategoryEnum.AgeDTO);

  const data: AgeDTO[] = (ageList as AgeDTO[]) || [];
  const infoText = "Write Age on Rx paper to view this";

  // Function to calculate the total sum of values for keys ending with "Count" across all objects in the array
  const totalSumCounts = (data: AgeDTO[]) => {
    const age = data[0];
    return (
      (age?.oneToTenCount || 0) +
      (age?.elevenToEighteenCount || 0) +
      (age?.nineteenToFourthCount || 0) +
      (age?.fortyOneToSixthCount || 0) +
      (age?.greaterThanSixtyCount || 0)
    );
  };

  // Call the function to get the total sum
  const totalCount = totalSumCounts(data);

  return (
    <>
      <div className="container-fluid">
        <div className="shadow rounded-3 p-2">
          <div className="row g-0">
            <InformationButton text={infoText} />
          </div>
          <div className="row">
            <div className="col text-purple">
              <h3>Age</h3>
            </div>
            <div className="row">
              {data?.length !== 0 ? (
                <div className="col">
                  {data.map((age, i) => (
                    <AgeDataCard key={i} data={age} sum={totalCount} />
                  ))}
                </div>
              ) : (
                <div>
                  <AgeInfo />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Age;
