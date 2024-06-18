import { FC } from "react";
import { usePatientDashboardList } from "../../../hooks/usePatientDataHelper";
import PatientDataCardLoader from "../../loaders/patients/PatientDataCardLoader";
import usePatientDataParamStore from "../../store/patientDataParamsStore";
import PatientDataCard from "./PatientDataCard";
interface PatientGridProps {
  showFamilyPrescription: boolean;
}
const PatientGrid: FC<PatientGridProps> = ({ showFamilyPrescription }) => {
  const params = usePatientDataParamStore((state) => state.params);

  const { data, isLoading } = usePatientDashboardList(params);

  if (data?.patientDetailsDTOList.length === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center p-5">
        <h2 className="text-purple">No Prescriptions Found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid mt-3 g-0 mb-2">
        <div className="shadow rounded-3 p-4">
          <div className="row">
            <div className="row d-flex align-items-center">
              <div className="col-3 fw-bolder">Name</div>
              <div className="col fw-bolder text-center">Phone Number</div>
              <div className="col fw-bolder text-center">Visits</div>
              <div className="col fw-bolder text-center">Last Rx Date</div>
              <div className="col fw-bolder text-center">Last Rx</div>
            </div>
          </div>
          <div className="row ">
            {/* below component will show number of PatientsDataCard based on limit that is set in this component */}
            <div className="col">
              {/* <PatientDataPaginate patient={getPatientsData()} /> */}
              <div>
                {isLoading ? (
                  <>
                    {[...Array(10)].map((_, index) => (
                      <PatientDataCardLoader key={index} />
                    ))}
                  </>
                ) : (
                  data?.patientDetailsDTOList?.map((item, i) => (
                    <PatientDataCard
                      key={i}
                      patient={item}
                      showFamilyPrescription={showFamilyPrescription}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientGrid;
