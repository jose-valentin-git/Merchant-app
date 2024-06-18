import { useState } from "react";
import PrescriptionDTO from "../../../../model/PrescriptionDTO";
import ViewPrescription from "./ViewPrescription";
import InvertedPlaySVG from "../../../../assets/InvertedPlaySVG";
import InvertedAudioSVG from "../../../../assets/InvertedAudioSVG";
import InvertedImageSVG from "../../../../assets/InvertedImageSVG";
import InvertedLeadShareSVG from "../../../../assets/InvertedLeadShareSVG";

export const Thumbnail = ({
  prescription,
}: {
  prescription: PrescriptionDTO;
}) => {
  const [show, setShow] = useState(false);
  const handleShowPrescription = () => {
    setShow(!show);
  };

  // Truncate the patient name if it's too long
  const truncatedPatientName =
    prescription.patientName.length > 15
      ? prescription.patientName.substring(0, 15) + "..."
      : prescription.patientName;

  return (
    <div className="mb-4">
      <div className="container-fluid">
        <div className="card shadow-sm">
          <div className="card-body " onClick={handleShowPrescription}>
            <img
              src={prescription.thumbnailURL}
              loading="lazy"
              alt=""
              style={{
                width: "100%",
                height: "auto",
                cursor: "pointer",
                objectFit: "cover", // Ensures the image covers the entire card body
                maxHeight: "fit-content", // Adjust the maximum height of the image as needed
                marginBottom: "10px", // Add margin bottom to separate image from text
              }}
              className="rounded-2 border border-1"
            />
            <div className="card-text">
              <div className="d-flex justify-content-between">
                <div className="">
                  <p className="mb-1 fw-bolder text-purple">
                    {truncatedPatientName}
                  </p>
                  <p className="mb-0 fw-bolder text-gray">
                    {prescription.mobileNumber}
                  </p>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-around">
                    {prescription.videoAvailable && (
                      <div className="col-3">
                        <InvertedPlaySVG width={25} height={25} />
                      </div>
                    )}
                    {prescription.audioAvailable && (
                      <div className="col-3">
                        <InvertedAudioSVG width={25} height={25} />
                      </div>
                    )}
                    {prescription.imagesAvailable && (
                      <div className="col-3">
                        <InvertedImageSVG width={25} height={25} />
                      </div>
                    )}
                    {prescription.leadShared && (
                      <div className="col-3">
                        <InvertedLeadShareSVG width={25} height={25} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <ViewPrescription
          show={show}
          setShow={setShow}
          ptpId={prescription.ptpId}
        />
      )}
    </div>
  );
};

export default Thumbnail;
