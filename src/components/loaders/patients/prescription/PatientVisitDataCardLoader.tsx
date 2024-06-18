import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PatientVisitDataCardLoader = () => {
  return (
    <>
      <div className="d-flex p-2 align-items-center justify-content-center text-purple">
        <div className="col fs-4">
          <Skeleton width={200} height={20} />
        </div>
        <div className="col fs-4">
          <Skeleton width={200} height={20} />
        </div>
        <div className="col fs-4">
          <Skeleton width={200} height={20} />
        </div>
        <div className="col fs-4">
          <Skeleton width={200} height={20} />
        </div>
        <div className="col fs-4">
          <Skeleton width={200} height={20} />
        </div>
      </div>
    </>
  );
};

export default PatientVisitDataCardLoader;
