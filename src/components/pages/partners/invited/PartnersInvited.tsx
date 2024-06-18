import { FC } from "react";
import PartnersInvitedCard from "./PartnersInvitedCard";
import { usePartnersDashboardData } from "../../../../hooks/usePartnerHelper";
import PartnersInvitedCardLoader from "../../../loaders/partners/invited/PartnersInvitedCardLoader";

const PartnersInvited: FC = () => {
  const { data, isLoading, refetch } = usePartnersDashboardData();
  if (isLoading) {
    return (
      <>
        {[...Array(4)].map((_, index) => (
          <PartnersInvitedCardLoader key={index} />
        ))}
      </>
    );
  }
  return (
    <>
      {data?.invitedList &&
        data.invitedList.map((partnersInvitedData, index) => {
          return (
            <PartnersInvitedCard
              refetch={refetch}
              partersDetails={partnersInvitedData}
              key={index}
            />
          );
        })}
    </>
  );
};

export default PartnersInvited;
