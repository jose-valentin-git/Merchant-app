import { FC } from "react";
import DateWisePrescriptionCard from "../pagesutility/DateWisePrescriptionCard";
import { useRxSubmittedList } from "../../../hooks/usePatientDataHelper";
import { useSubmittedRxDateFilterStore } from "../../../middleware/filterDateStore";
import ThumbnailLoader from "../../loaders/rx/DateWisePrescriptionCardLoader";

const SubmittedRx: FC = () => {
  const { fromDate, tillDate } = useSubmittedRxDateFilterStore();
  const { data, isLoading } = useRxSubmittedList(fromDate, tillDate);

  if (isLoading) {
    return <ThumbnailLoader />;
  }

  return (
    <>
      {data?.length === 0 ? (
        <div className="mt-4 d-flex align-items-center justify-content-center">
          <p className="fs-3 text-purple">No Prescription Found</p>
        </div>
      ) : (
        <div className="container-fluid mb-5">
          <div>
            {data?.map((list, index) => {
              return <DateWisePrescriptionCard key={index} data={list} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SubmittedRx;
