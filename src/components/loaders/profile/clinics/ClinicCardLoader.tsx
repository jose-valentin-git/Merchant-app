import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ClinicCardLoader = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="border rounded-3 row  d-flex align-items-around">
        <div className="col">
          <div className="p-4 d-flex align-items-center justify-content-between">
            <div className="col">
              <Skeleton width={50} height={50} />
            </div>
            <div className="col">
              <div className="text-purple">
                <Skeleton width={100} height={10} />
              </div>
              <div className="">
                <Skeleton width={150} height={10} />
              </div>
            </div>
            <div className="col">
              <button className="btn ">
                <Skeleton width={150} height={10} />
              </button>
            </div>
            <div className="col-2 btn d-flex align-items-end justify-content-around ">
              <Skeleton width={50} height={50} />
            </div>
            <div className="col-1 btn">
              <Skeleton width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicCardLoader;
