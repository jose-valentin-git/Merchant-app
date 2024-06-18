import { FC } from "react";
import { Link } from "react-router-dom";
import { useDownloadMedia } from "../../hooks/useMediaHelper";
import { useDoctorProfileDetails } from "../../hooks/useDoctorProfileDataHelper";
import useSideNavBarOpenStore from "../store/SideNavBarOpenStore";
import ProfileImageLoader from "../loaders/profile/ProfileImageLoader";
import DefaultProfileImageSVG from "../../assets/DefaultProfileImageSVG";

interface Props {
  clickedLink: number;
  setClickedLink: (param: number) => void;
}

const DoctorProfile: FC<Props> = ({ setClickedLink, clickedLink }) => {
  const id = -1;
  const { isOpen } = useSideNavBarOpenStore();

  const { data: dto } = useDoctorProfileDetails();

  const mediaId = dto?.profilePicture?.id;

  const { data, isLoading } = useDownloadMedia(mediaId);

  return (
    <div className="row mt-xxl-3 mt-xl-1 d-flex align-item-center justify-content-center">
      <div
        className={`${
          isOpen && "ms-4"
        } text-white d-flex  justify-content-start`}
        style={{
          fontSize: "15px",
        }}
      >
        My Profile
      </div>
      <Link
        to={"profile"}
        className={`text-decoration-none`}
        onClick={() => {
          setClickedLink(id);
        }}
      >
        <div
          className={`${
            clickedLink === id ? "bg-white rounded" : ""
          } col g-0 d-flex  justify-content-center p-1 `}
        >
          <div
            className={`d-flex align-items-center justify-content-center ${
              isOpen ? "col-md-4 col-xxl-3" : "col-12"
            }`}
          >
            <div
              style={{
                height: "7vh",
                width: "7vh",
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
          {isOpen && (
            <div className="g-0 col  d-flex align-items-center justify-content-center">
              <div className="d-flex  justify-content-center">
                <div
                  className={` fs-4 ${
                    clickedLink === id ? "text-purple" : "text-white"
                  }`}
                >
                  Dr {dto?.lastName}
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default DoctorProfile;
