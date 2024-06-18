import { FC } from "react";

const DashboardLeadsSharedInfo: FC = () => {
  return (
    <>
      <div className="continer-fluid position-relative bg-palepurple rounded text-purple m-3">
        <div className="row p-4">
          <p className=" fs-5 fw-bolder">
            Map your partner Chemist, Pathalogy{" "}
          </p>
          <p className=" fs-5 fw-bolder">etc to view this report</p>
        </div>
        <svg
          width={351}
          height={143}
          viewBox="0 0 351 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bg-palepurple position-absolute bottom-0 end-0"
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

export default DashboardLeadsSharedInfo;
