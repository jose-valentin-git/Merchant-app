import { FC, useState } from "react";
import EditSVG from "../../../assets/EditSVG";
import doctorProfileStore from "../../../middleware/doctorProfileStore";
import { useDownloadMedia } from "../../../hooks/useMediaHelper";
import CookieUtils from "../../../utils/CookieUtils";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes";
import { useQueryClient } from "@tanstack/react-query";
import OptionModal from "./profileimage/OptionModal";
import ProfileImageLoader from "../../loaders/profile/ProfileImageLoader";
import DefaultProfileImageSVG from "../../../assets/DefaultProfileImageSVG";
const MyProfile: FC = () => {
  const doctorData = doctorProfileStore((store) => store.doctorData);
  const { data, isLoading } = useDownloadMedia(doctorData?.profilePicture?.id);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // This will maintain the state of remove option to show or not when there is no profile image of doctor
  const [showRemoveImageOption, setShowRemoveImageOption] =
    useState<boolean>(false);
  const clientRequest = useQueryClient();
  const navigation = useNavigate();

  const handleLogout = () => {
    clientRequest.clear();
    CookieUtils.clearAll();
    navigation(ROUTES.login);
  };
  const handleCheckForRemoveOption = () => {
    if (doctorData?.profilePicture?.id === undefined) {
      setShowRemoveImageOption(false);
    } else {
      setShowRemoveImageOption(true);
    }
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="container-fluid shadow p-4 rounded-3">
        <div className="row">
          <div className={`d-flex align-items-center justify-content-center`}>
            <div className="position-relative">
              <div
                className="btn bg-white border position-absolute top-0 end-0 z-1"
                onClick={handleCheckForRemoveOption}
              >
                <EditSVG />
                <div className="position-absolute top-0 end-0 start-20 z-1">
                  <OptionModal
                    show={showDropdown}
                    setShow={setShowDropdown}
                    showRemoveImageOption={showRemoveImageOption}
                  />
                </div>
              </div>
              <div
                style={{
                  height: "20vh",
                  width: "20vh",
                  overflow: "hidden",
                  borderRadius: "50%",
                }}
              >
                {isLoading ? (
                  <ProfileImageLoader />
                ) : data ? (
                  <img
                    src={data}
                    alt="Image not found"
                    style={{
                      width: "100%", // Set width to fill the circular boundary
                      height: "100%", // Set height to fill the circular boundary
                      objectFit: "cover", // Maintain aspect ratio and cover the container
                      overflow: "hidden",
                    }}
                  />
                ) : (
                  <DefaultProfileImageSVG />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="fs-5 text-purple">
              {doctorData?.degree || "----------"}
            </p>
            <p className="fs-5 fw-bolder text-purple">
              {doctorData?.displayName || "----------"}
            </p>
          </div>
        </div>
        <div className="row  my-3 ">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="fs-5  fw-bolder text-gray">Email Id</p>
            <p className="fs-5  text-purple">
              {doctorData?.secondaryEmail || "----------"}
            </p>
          </div>
        </div>
        <div className="row  my-3 ">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="fs-5  fw-bolder text-gray">Phone No</p>
            <p className="fs-5  text-purple">
              {doctorData?.mobileNumber || "----------"}
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row my-3">
          <button
            onClick={() => handleLogout()}
            className="border btn bg-purple text-white btn-hover"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
