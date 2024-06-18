import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ViewPrescriptionLoader = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="card shadow-sm">
          <div className="card-body ">
            <Skeleton
              width={500}
              height={100}
              className="rounded-2 border border-1"
            />
            <div className="card-text">
              <div className="d-flex justify-content-between">
                <div className="">
                  <p className="mb-1 fw-bolder text-purple">
                    <Skeleton width={100} height={10} />
                  </p>
                  <p className="mb-0 fw-bolder text-gray">
                    <Skeleton width={100} height={10} />
                  </p>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-around">
                    <div className="col-3">
                      <Skeleton width={25} height={25} />
                    </div>
                    <div className="col-3">
                      <Skeleton width={25} height={25} />
                    </div>
                    <div className="col-3">
                      <Skeleton width={25} height={25} />
                    </div>
                    <div className="col-3">
                      <Skeleton width={25} height={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPrescriptionLoader;
