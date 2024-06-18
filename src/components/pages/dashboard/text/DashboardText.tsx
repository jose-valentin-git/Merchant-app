import { FC } from "react";
import FollowingUpVisits from "./followupvisits/FollowingUpVisits";
import LeadsShared from "./leadshared/LeadsShared";
import PatientVisitIndex from "./patientvisitindex/PatientVisitIndex";
import Gender from "./gender/Gender";
import FollowUpConversion from "./followupconversion/FollowUpConversion";
import Age from "./age/Age";
import RxDigitizedAndPending from "../RxDigitizedAndPending";
import { useDashboardDetails } from "../../../../hooks/useDashboardDataHelper";
import LoadingSpinner from "../../../componentutils/LoadingSpinner";

const DashboardText: FC = () => {
  const { isLoading } = useDashboardDetails();
  if (isLoading) {
    <LoadingSpinner />;
  }
  return (
    <>
      <div className="row mt-3">
        <RxDigitizedAndPending />
      </div>
      <div className="row mt-3">
        <FollowingUpVisits />
      </div>
      <div className="row ">
        <FollowUpConversion />
      </div>
      <div className="row mt-3">
        <div className="col-7 g-0">
          <LeadsShared />
        </div>
        <div className="col g-0">
          <PatientVisitIndex />
        </div>
      </div>
      <div className="row mt-3 mb-2">
        <div className="col-7 g-0">
          <Gender />
        </div>
        <div className="col g-0">
          <Age />
        </div>
      </div>
    </>
  );
};

export default DashboardText;
