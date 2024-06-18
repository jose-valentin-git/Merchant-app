import { FC, useState } from "react";
import MyProfile from "./MyProfile";
import { Link, Outlet } from "react-router-dom";

const Profile: FC = () => {
  const [activeButton, setActiveButton] = useState<string>("personal");
  return (
    <div className="container-fluid mb-5 ">
      <div className="row mt-3">
        <div className="row text-purple d-flex align-items-between">
          <div className="col">
            <h2>My Profile</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-xxl-3">
            <MyProfile />
          </div>
          <div className="col shadow">
            <div className="row g-0 d-flex mt-3 ">
              <div className="col-6 mb-3  d-flex align-items-center justify-content-between">
                <Link to="personal">
                  <button
                    className={`${
                      activeButton === "personal" ? "bg-purple text-light" : ""
                    } btn text-purple border-purple btn-hover border text-center rounded-3`}
                    onClick={() => {
                      setActiveButton("personal");
                    }}
                  >
                    Personal
                  </button>
                </Link>
                <Link to="clinics">
                  <button
                    className={`${
                      activeButton === "clinics" ? "bg-purple text-light" : ""
                    } btn text-purple border-purple btn-hover border text-center rounded-3`}
                    onClick={() => {
                      setActiveButton("clinics");
                    }}
                  >
                    Clinics
                  </button>
                </Link>
                <Link to="associate">
                  <button
                    className={`${
                      activeButton === "associatelist"
                        ? "bg-purple text-light"
                        : ""
                    } btn text-purple border-purple btn-hover border text-center rounded-3`}
                    onClick={() => {
                      setActiveButton("associatelist");
                    }}
                  >
                    Associate List
                  </button>
                </Link>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
