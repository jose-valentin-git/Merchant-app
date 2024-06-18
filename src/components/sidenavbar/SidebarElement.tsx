import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { SideBarElementsProps } from "../../model/UI/interface";
import useSideNavBarOpenStore from "../store/SideNavBarOpenStore";

const SidebarElement: FC<SideBarElementsProps> = ({
  item,
  clickedLink,
  setClickedLink,
}) => {
  const [hover, setHover] = useState(false);
  const location = useLocation();
  const { isOpen } = useSideNavBarOpenStore();

  useEffect(() => {
    if (location.pathname.includes(item.path)) {
      setClickedLink(item.id);
    }
  }, []);

  return (
    <div
      className={`row mt-xxl-3 mt-xl-1 d-flex  ${
        clickedLink === item.id ? "bg-light rounded" : ""
      } `}
      key={item.id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        onClick={() => {
          setClickedLink(item.id);
        }}
        to={item.path}
        className={` vw-100 fs-4 text-decoration-none ${
          isOpen ? "d-xxl-flex justify-content-xxl-center" : ""
        }`}
        style={{
          borderRadius: "5px",
          transition: "all 0.3s",
          background: `${hover || clickedLink === item.id ? "white" : ""}`,
        }}
      >
        <div className={`d-flex col-xxl-10 ${isOpen ? "" : "ms-auto"}`}>
          <div
            className={` g-0  d-flex align-items-center   ${
              isOpen ? "col-2 mb-0" : "p-2 d-flex justify-content-start "
            }`}
          >
            {item.icon &&
              React.createElement(item.icon, {
                color: "#6c5dd3",
                hover: hover || clickedLink === item.id,
              })}
          </div>
          <div
            className={`col ms-4 ${
              clickedLink === item.id || hover ? "text-purple" : "text-white"
            }`}
          >
            <div className="fs-5">{isOpen && item.label}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SidebarElement;
