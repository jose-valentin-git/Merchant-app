import { FC } from "react";

const DashboardFollowUpVisitsInfo: FC = () => {
  return (
    <>
      <div className="container-fluid text-purple m-3 position-relative rounded">
        <div className="row p-4  d-flex align-items-center rounded justify-content-center bg-palepurple">
          <div className="col-10">
            <p className="fs-5 fw-bolder">
              If you write days in “Visit After” on your Rx Paper, you will be
              able to see this Report
            </p>
          </div>
          <div className="col z-1">
            <div className="row bg-light rounded-3">
              <div className="border p-4 align-items-center justify-content-center">
                <div className="row d-flex align-items-center justify-content-center">
                  <p className="text-center fs-5">Visit After</p>
                </div>
                <div className="row ">
                  <div className="col-6 rounded-start border">‎ </div>
                  <div className="col-6 rounded-end border">‎ </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          width={351}
          height={143}
          viewBox="0 0 351 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rounded position-absolute bottom-0 end-0"
        >
          <path
            d="M164.751 98.1571C49.1865 120.199 6.76513 150.584 0 163.021C6.36718 166.848 20.2954 174.502 25.0708 174.502C31.04 174.502 119.385 182.538 146.843 184.834C174.302 187.13 224.443 190 238.769 190C250.23 190 336.665 179.668 378.449 174.502L388 137.764V44.1994L383.225 0H350.991C337.063 23.5347 280.315 76.1148 164.751 98.1571Z"
            fill="#6C5DD3"
          />
        </svg>
      </div>
    </>
  );
};

export default DashboardFollowUpVisitsInfo;
