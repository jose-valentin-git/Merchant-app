import { FC, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import TopBar from "../topbar/TopBar";
import WondrxLogo from "../wondrxlogo/WondrxLogo";
import SideNavData from "../data/SidenavBarData";
import SidebarElement from "./SidebarElement";
import DoctorProfile from "./DoctorProfile";
import useSideNavBarOpenStore from "../store/SideNavBarOpenStore";
import CookieUtils from "../../utils/CookieUtils";
import ROUTES from "../routes";
import ValidateCookies from "../ValidateCookies";
const SideNavbar: FC = () => {
  const [clickedLink, setClickedLink] = useState<number>(1);
  const { isOpen, toggle, setOpenState } = useSideNavBarOpenStore();
  const navigation = useNavigate();

  const access = CookieUtils.getUserDetails();

  if (!!!access) {
    navigation(ROUTES.login);
    return <ValidateCookies />;
  }

  return (
    <>
      <div id="nav-sm-bar" className="row">
        <div
          className={`${
            isOpen ? "col-sm-2 col-md-2 col-lg-2 sidebar " : "col-sm-1 sidebar "
          }`}
          onMouseEnter={() =>
            setTimeout(() => {
              setOpenState(true);
            }, 500)
          }
          onMouseLeave={() => setOpenState(false)}
        >
          <nav
            className="nav flex-column rounded-end-5 bg-purple"
            style={{ height: "100vh" }}
          >
            <div className="container-fluid ">
              <div className="row ">
                <div
                  className="col d-flex align-items-center justify-content-center"
                  onClick={toggle}
                  style={{ cursor: "pointer" }}
                >
                  <WondrxLogo width="7vh" height="7vh" />
                </div>
              </div>
              <div className="container-fluid">
                <div>
                  <>
                    {SideNavData.map((item) => (
                      <SidebarElement
                        clickedLink={clickedLink}
                        setClickedLink={setClickedLink}
                        key={item.id}
                        item={item}
                      />
                    ))}
                  </>
                </div>
              </div>
              <hr />
            </div>
            <div className="container">
              <div>
                <DoctorProfile
                  clickedLink={clickedLink}
                  setClickedLink={setClickedLink}
                />
              </div>
            </div>
          </nav>
        </div>
        <div className="col g-0">
          <div className="grid">
            <div className="row mb-2">
              <TopBar isOpen={isOpen} />
            </div>
            <main className="row content-area">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
