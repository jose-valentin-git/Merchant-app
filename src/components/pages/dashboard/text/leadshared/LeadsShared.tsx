import { FC } from "react";
import LeadSharedDataCard from "./LeadSharedDataCard";
import InformationButton from "../../../../../utils/InformationButton";
import LeadCategoryDetailsDTO from "../../../../../model/dashboard/LeadCategoryDetailsDTO";
import CategoryEnum from "../../../../../model/dashboard/enums/CategoryEnum";
import dashboardStore from "../../../../../middleware/dashboardStore";
import { useDashboardDetails } from "../../../../../hooks/useDashboardDataHelper";
import DashboardLeadsSharedInfo from "./DashboardLeadsSharedInfo";

const LeadsShared: FC = () => {
  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const leadCagetoryList = map
    ?.get(duration)
    ?.get(CategoryEnum.LeadCategoryDetailsDTO);

  const data: LeadCategoryDetailsDTO[] =
    (leadCagetoryList as LeadCategoryDetailsDTO[]) || [];

  const infoText =
    "map your Partners viz. Chemist, pathology etc & then Tick tem through the Rx-Paper for referring Patients to your Partners.Once done this report will be visible";
  return (
    <>
      <div className="container">
        <div className="shadow rounded-3 p-2">
          <div className="row g-0">
            <InformationButton text={infoText} />
          </div>
          <div className="row">
            <div className="col">
              <h3 className="text-purple">Leads Shared</h3>
            </div>
            <div className="row mt-4">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col text-center">Category</div>
                <div className="col text-center">Rx Shared</div>
                <div className="col text-center">Accepted</div>
                <div className="col text-center">Rejected</div>
                <div className="col text-center">Expired</div>
                <div className="mt-3">
                  <hr />
                </div>
              </div>
              <div className="row">
                {data.length !== 0 ? (
                  <div className="col">
                    {data?.map((lead, i) => (
                      <LeadSharedDataCard key={i} data={lead} />
                    ))}
                  </div>
                ) : (
                  <div>
                    <DashboardLeadsSharedInfo />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadsShared;
