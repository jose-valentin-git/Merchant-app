import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DateWisePrescriptionCardLoader = () => {
  let n = 5;
  // Create an array with n elements to map over
  const skeletonCards = Array.from({ length: n }, (_, index) => (
    <span key={index} className="me-3">
      <Skeleton width={200} height={250} />
    </span>
  ));

  return (
    <>
      <div className="cotainer-fuild ">
        <div className="my-3 fw-bolder">
          <div>
            <Skeleton width={100} height={20} />
          </div>
        </div>
        <div className="d-flex">{skeletonCards}</div>
        <div className="d-flex justify-content-center w-100">
          <div className=" border mt-2 w-50 border-dashed"></div>
        </div>
      </div>
    </>
  );
};

export default DateWisePrescriptionCardLoader;
