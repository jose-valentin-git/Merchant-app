import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const PatientDataCardLoader = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row text-start my-4 border-bottom">
          <div className="col-3 d-flex align-items-center ">
            <div className="col">
              {/*  <PatientSVG /> */}
              <Skeleton width={50} height={50} borderRadius={10} />
            </div>
            <div className="container-fluid overflow-x-hidden">
              <div className="col">
                <p className="mt-3 fw-bolder text-purple ">
                  {/*{patient?.patientName} */}
                  <Skeleton height={20} width={200} />
                </p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className=" d-flex align-items-center justify-content-center flex-wrap">
              <p className="mt-3">
                {/*{patient?.mobileNumber} */}
                <Skeleton height={20} width={200} />
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" d-flex align-items-center justify-content-center">
              <p className="mt-3">
                {/* {patient?.nextVisit} */}
                <Skeleton height={20} width={200} />
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" d-flex align-items-center justify-content-center">
              <p className="mt-3">
                {/*  {patient?.lastRx} */}
                <Skeleton height={20} width={200} />
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <div className="btn">
              <Skeleton width={50} height={50} borderRadius={10} />
            </div>

            <div>
              <Skeleton width={50} height={50} borderRadius={10} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDataCardLoader;
