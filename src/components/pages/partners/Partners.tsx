import { FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Partners: FC = () => {
  const [activeButton, setActiveButton] = useState<string>("invited");
  return (
    <>
      <div className="container-fluid mb-4">
        <div className="row mb-3 ">
          <div className="row">
            <div className="col-2">
              <h2 className="text-purple">Partners</h2>
            </div>
            <div className="col-xxl-4 col-md-6 d-flex justify-content-start align-items-baseline ">
              <div className="col">
                <Link
                  to={"invited"}
                  className={`${
                    activeButton === "invited" ? "bg-purple text-light" : ""
                  } btn text-purple border-purple btn-hover border text-center rounded-3`}
                  onClick={() => {
                    setActiveButton("invited");
                  }}
                >
                  Invited
                </Link>
              </div>
              <div className="col">
                <Link
                  to={"active"}
                  className={`${
                    activeButton === "active" ? "bg-purple text-light" : ""
                  } btn text-purple border-purple btn-hover border text-center rounded-3`}
                  onClick={() => {
                    setActiveButton("active");
                  }}
                >
                  Active
                </Link>
              </div>
              <div className="col">
                <Link
                  to={"inactive"}
                  className={`${
                    activeButton === "inactive" ? "bg-purple text-light" : ""
                  } btn text-purple border-purple btn-hover border text-center rounded-3`}
                  onClick={() => {
                    setActiveButton("inactive");
                  }}
                >
                  In Active
                </Link>
              </div>
              <div className="col">
                <Link
                  to={"invite"}
                  className={`${
                    activeButton === "invite" ? "bg-purple text-light" : ""
                  } btn text-purple border-purple btn-hover border text-center rounded-3`}
                  onClick={() => {
                    setActiveButton("invite");
                  }}
                >
                  Invite Partner
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
