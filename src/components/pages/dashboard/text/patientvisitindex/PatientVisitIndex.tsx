import { FC } from "react";
import PatientvisitIndexDataCard from "./PatientvisitIndexDataCard";
import InformationButton from "../../../../../utils/InformationButton";
import dashboardStore from "../../../../../middleware/dashboardStore";
import CategoryEnum from "../../../../../model/dashboard/enums/CategoryEnum";
import PatientVisitIndexDTO from "../../../../../model/dashboard/PatientVisitIndexDTO";
import { useDashboardDetails } from "../../../../../hooks/useDashboardDataHelper";
import DashboardPatientVisitIndexInfo from "./DashboardPatientVisitIndexInfo";

const PatientVisitIndex: FC = () => {
  const infoText =
    "Capure correct mobile number of the Patient while writing Rx to view this report";

  const { data: map } = useDashboardDetails();
  const { duration } = dashboardStore();
  const patientVisitIndexList = map
    ?.get(duration)
    ?.get(CategoryEnum.PatientVisitIndexDTO);

  const data: PatientVisitIndexDTO[] =
    (patientVisitIndexList as PatientVisitIndexDTO[]) || [];

  return (
    <>
      <div className="container-fluid">
        <div className="shadow rounded-3 p-2">
          <div className="row g-0">
            <InformationButton text={infoText} />
          </div>
          <div className="row">
            <div className="col text-purple">
              <h3>Patient visit index</h3>
            </div>
            <div className="row mt-4">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col text-center">Frequency</div>
                <div className="col text-center">No of Patients</div>
                <div className="mt-3">
                  <hr />
                </div>
              </div>
              <div className="row">
                {data.length !== 0 ? (
                  <div className="col">
                    {/* <DashboardInfoCards text="Use Mobile No Of patients to view this report" /> */}
                    {data?.map((patientIndex, i) => (
                      <PatientvisitIndexDataCard key={i} data={patientIndex} />
                    ))}
                  </div>
                ) : (
                  <div>
                    <DashboardPatientVisitIndexInfo />
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

export default PatientVisitIndex;
