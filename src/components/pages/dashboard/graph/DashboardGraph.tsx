import { FC } from "react";
import FollowingUpVisits from "../text/followupvisits/FollowingUpVisits";
import LeadSharedGraph from "./leadshared/LeadSharedGraph";
import PatientVisitIndexGraph from "./patientvisitindex/PatientVisitIndexGraph";
import GenderGraph from "./gender/GenderGraph";
import AgeGraph from "./age/AgeGraph";
import FollowUpConversionGraph from "./FollowUpConversionGraph";
import TotalRxDigitized from "./TotalRxDigitizedAndPendingRx";
import { useDashboardDetails } from "../../../../hooks/useDashboardDataHelper";
import LoadingSpinner from "../../../componentutils/LoadingSpinner";

const DashboardGraph: FC = () => {
  const { isLoading } = useDashboardDetails();
  if (isLoading) {
    <LoadingSpinner />;
  }
  return (
    <>
      <div className="row mt-4">
        {/* <div className="row border"> */}
        <div className="col">
          <TotalRxDigitized />
        </div>
        <div className="col">
          <FollowUpConversionGraph />
        </div>
        {/* </div> */}
      </div>
      <div className="row mt-4 ">
        <FollowingUpVisits />
      </div>
      <div className="row my-4">
        <div className="col">
          <LeadSharedGraph />
        </div>
        <div className="col">
          <PatientVisitIndexGraph />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <GenderGraph />
        </div>
        <div className="col">
          <AgeGraph />
        </div>
      </div>
    </>
  );
};

export default DashboardGraph;
