import { FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Help: FC = () => {
  const [activeButton, setActiveButton] = useState<string>("contactus");

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="row text-purple">
            <div className="col-2">
              <h2>Help</h2>
            </div>
            <div className="col-xxl-4 col-md-6 d-flex justify-content-start align-items-baseline ">
              <div className="col">
                <Link
                  to={"contactUs"}
                  className={`${
                    activeButton === "contactus" ? "bg-purple text-light" : ""
                  } btn text-purple border-purple btn-hover border text-center rounded-3`}
                  onClick={() => {
                    setActiveButton("contactus");
                  }}
                >
                  Contact Us
                </Link>
              </div>
              <div className="col">
                <Link
                  to={"helpVideos"}
                  className={`${
                    activeButton === "video" ? "bg-purple text-light" : ""
                  } btn text-purple border-purple btn-hover border text-center rounded-3`}
                  onClick={() => {
                    setActiveButton("video");
                  }}
                >
                  Video
                </Link>
              </div>
              <div className="col">
                <Link
                  to={"faqs"}
                  className={`${
                    activeButton === "faqs" ? "bg-purple text-light" : ""
                  } btn text-purple border-purple btn-hover border text-center rounded-3`}
                  onClick={() => {
                    setActiveButton("faqs");
                  }}
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Help;
