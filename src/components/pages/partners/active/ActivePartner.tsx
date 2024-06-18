import { FC, useState } from "react";
import ActivePartnerCard from "./ActivePartnerCard";
import { usePartnersDashboardData } from "../../../../hooks/usePartnerHelper";
import ActivePartnerCardLoader from "../../../loaders/partners/active/ActivePartnerCardLoader";

const ActivePartner: FC = () => {
  const [activeEventKey, setActiveEventKey] = useState<string | null>(null);
  const { data, isLoading, refetch } = usePartnersDashboardData();
  const activeLifeTimeDatalist = data?.activeList.filter(
    (items) => items.dashboardTime === "LIFETIME"
  );
  const spinnerArray = [1, 2, 3, 4, 5, 6];
  if (isLoading) {
    return (
      <>
        {spinnerArray.map((index) => (
          <ActivePartnerCardLoader key={index} />
        ))}
      </>
    );
  }
  return (
    <div>
      {activeLifeTimeDatalist?.map((activePartnes, index) => {
        return (
          <ActivePartnerCard
            activePartnersData={activePartnes}
            key={index}
            refetch={refetch}
            activeEventKey={activeEventKey}
            setActiveEventKey={setActiveEventKey}
            index={index + ""}
          />
        );
      })}
    </div>
  );
};

export default ActivePartner;
