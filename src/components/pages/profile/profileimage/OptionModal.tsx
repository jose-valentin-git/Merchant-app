import React, { FC, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import WebcamPictures from "./WebcamPictures";
import ToastUtils from "../../../../utils/ToastUtils";
import {
  removeDoctorProfile,
  uploadProfileProfileImage,
} from "../../../../services/DoctorProfileService";
import { useDoctorProfileDetails } from "../../../../hooks/useDoctorProfileDataHelper";

interface OptionsModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  showRemoveImageOption: boolean;
}

const OptionsModal: FC<OptionsModalProps> = ({
  show,
  setShow,
  showRemoveImageOption,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showWebcam, setShowWebcam] = useState(false); // State to manage whether the WebCamPictures component is shown

  const { refetch } = useDoctorProfileDetails();

  // this method will execute whenever selected images gets changed
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      // Check if the selected file is an image
      if (selectedFile.type.startsWith("image/")) {
        const formData = new FormData();
        formData.append("media", selectedFile);
        uploadProfileProfileImage(formData)
          .then(() => {
            ToastUtils.success("Profile picture updated successfully");
            setShow(false);

            refetch();
          })
          .catch(() => {
            ToastUtils.error("Something went wrong");
          });
        // Handle the selected image
        // Close the modal after a short delay
      } else {
        // If the selected file is not an image, show an error message or take appropriate action
        ToastUtils.error("Please select an image");
      }
    }
  };

  const onRemoveProfile = () => {
    removeDoctorProfile()
      .then(() => {
        setShow(false);
        refetch();
        ToastUtils.success("Profile removed successsfully");
      })
      .catch((e) => ToastUtils.error(e));
  };

  return (
    <>
      <Dropdown show={show}>
        {/* <Dropdown.Toggle variant="success" id="dropdown-basic">
          Edit Profile Picture
        </Dropdown.Toggle> */}
        <Dropdown.Menu>
          {/* Hidden file input to trigger when button is clicked */}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <Dropdown.Item
            onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.click(); // Trigger click on file input
              }
            }}
          >
            Select Image
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setShowWebcam(true);
            }}
          >
            Click Image
          </Dropdown.Item>
          {showRemoveImageOption && (
            <>
              <div className="container-fluid border border-bottom mb-1"></div>
              <Dropdown.Item
                className=" remove-option"
                onClick={() => {
                  onRemoveProfile();
                }}
              >
                Remove Image
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>

      <WebcamPictures
        showWebCamModel={showWebcam}
        setShowWebCamModel={setShowWebcam}
        setShowDropDow={setShow}
        refetch={refetch}
      />
    </>
  );
};

export default OptionsModal;
