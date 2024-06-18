import { FC } from "react";
import InactiveDataCard from "./InactiveDataCard";
import { usePartnersDashboardData } from "../../../../hooks/usePartnerHelper";
import ActivePartnerCardLoader from "../../../loaders/partners/active/ActivePartnerCardLoader";

const InactivePartners: FC = () => {
  const { data, isLoading, refetch } = usePartnersDashboardData();
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
      {data?.inActiveList &&
        data.inActiveList.map((activeDataList, index) => {
          return (
            <InactiveDataCard
              refetch={refetch}
              inActivePartnersData={activeDataList}
              key={index}
              index={index + ""}
            />
          );
        })}
    </div>
  );
};

export default InactivePartners;
