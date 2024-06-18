import { FC } from "react";
import GenderDataCard from "./GenderDataCard";
import InformationButton from "../../../../../utils/InformationButton";
import dashboardStore from "../../../../../middleware/dashboardStore";
import CategoryEnum from "../../../../../model/dashboard/enums/CategoryEnum";
import GenderPercentageCountDTO from "../../../../../model/dashboard/GenderPercentageCountDTO";
import { useDashboardDetails } from "../../../../../hooks/useDashboardDataHelper";
import GenderInfo from "./GenderInfo";

const Gender: FC = () => {
  const infoText = "Tick Patient's Gender on Rx Paper to view this report";

  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const genderList = map
    ?.get(duration)
    ?.get(CategoryEnum.GenderPercentageCountDTO);

  const data: GenderPercentageCountDTO[] =
    (genderList as GenderPercentageCountDTO[]) || [];

  return (
    <>
      <div className="container-fluid">
        <div className="shadow rounded-3 p-2">
          <div className="row g-0">
            <InformationButton text={infoText} />
          </div>
          <div className="row">
            <div className="col text-purple">
              <h3>Gender</h3>
            </div>
            <div className="row">
              {data.length !== 0 ? (
                <div className="col">
                  {data.map((gender, i) => (
                    <GenderDataCard key={i} data={gender} />
                  ))}
                </div>
              ) : (
                <div>
                  <GenderInfo />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gender;
