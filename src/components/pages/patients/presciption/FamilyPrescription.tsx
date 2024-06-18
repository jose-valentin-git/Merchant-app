import PrescriptionFilter from "../PrescriptionFilter";
import PatientVisitDataCard from "./PatientVisitDataCard";
import { useParams } from "react-router-dom";
import { useFamilyTree } from "../../../../hooks/usePatientDataHelper";
import { AxiosError } from "axios";

import { useFamilyPrescriptionDateFilterStore } from "../../../../middleware/filterDateStore";
import DateWisePrescriptionCard from "../../pagesutility/DateWisePrescriptionCard";
import DateWisePrescriptionCardLoader from "../../../loaders/rx/DateWisePrescriptionCardLoader";

const FamilyPrescription = () => {
  const params = useParams<{ patientId: string }>();
  const { fromDate, tillDate } = useFamilyPrescriptionDateFilterStore();

  const { data, isLoading, isError, error } = useFamilyTree(
    params.patientId!,
    fromDate,
    tillDate
  );

  if (isError) {
    const err = error as AxiosError;
    return (
      <div className="d-flex align-items-center justify-content-center">
        <h1 className="text-purple">{err.message}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid ">
        <div className="row w-100">
          <div className="row">
            <div className="col text-purple">
              <h2>Patient</h2>
            </div>
          </div>
          {/* TODO : family mamers implementation  */}
          {/* <div className="row ">
            <div className="col">
              <TopBar />
            </div>
          </div> */}
          <div className="row m-1">
            {
              <PatientVisitDataCard
                patient={data?.patientDetailsDTO}
                isLoading={isLoading}
              />
            }
          </div>
          <div className="row m-2">
            <PrescriptionFilter />
          </div>
          <div className="row m-2">
            {isLoading ? (
              <DateWisePrescriptionCardLoader />
            ) : (
              data?.dayWisePrescriptionList.map((d, i) => {
                return <DateWisePrescriptionCard key={i} data={d} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyPrescription;
