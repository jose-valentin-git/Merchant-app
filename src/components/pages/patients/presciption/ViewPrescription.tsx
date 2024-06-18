import { FC, useState } from "react";
import Modal from "react-bootstrap/Modal";
import printerImage from "../../../../assets/printer.png";
import PlaySVG from "../../../../assets/PlaySVG";
import AudioSVG from "../../../../assets/AudioSVG";
import ImageSVG from "../../../../assets/ImageSVG";
import PrescriptionImages from "./prescriptiondetails/prescriptionimage/PrescriptionImages";
import PrescriptionAudio from "./prescriptiondetails/prescriptionaudio/PrescriptionAudio";
import ViewPrescriptionLoader from "../../../loaders/patients/prescription/ViewPrescriptionLoader";
import LeadSharedModal from "./prescriptiondetails/leadshared/LeadShared";
import leadShared from "../../../../assets/leadShared.png";
import { usePrescriptionDetails } from "../../../../hooks/usePrescriptionDetails";
import ToastUtils from "../../../../utils/ToastUtils";
import ShareRxDropDown from "./prescriptiondetails/prescriptionreshare/ShareRxDropDown";
import PrescriptionVideoThumbNail from "./prescriptiondetails/prescriptionvideo/PrescriptionVideoThumbNail";
const ViewPrescription: FC<{
  show: boolean;
  setShow: (param: boolean) => void;
  ptpId: string;
}> = ({ show, setShow, ptpId }) => {
  const { data, isLoading } = usePrescriptionDetails(ptpId);
  //Reshare states
  //Audio states
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  //Video states
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

  //Audio states
  const [showAudioModal, setShowAudioModal] = useState<boolean>(false);

  //Lead Shared modal
  const [showLeadShared, setShowLeadShared] = useState<boolean>(false);
  // const iframeRef = useRef(null);

  // show video modal
  // this method will check the whether the videos are present or not
  const checkAndShowVideoModal = () => {
    const vidoes = data?.videosList?.length;
    if (vidoes === undefined || vidoes === null || vidoes === 0) {
      ToastUtils.error("No videos shared");
    } else {
      setShowVideoModal(true);
    }
  };

  // show video modal
  // This method will check the whether the audio is present or not
  const checkAndShowAudioModal = () => {
    const audioUrl = data?.audioUrl;
    if (audioUrl === undefined || audioUrl === null || audioUrl === "") {
      ToastUtils.error("No audio shared");
    } else {
      setShowAudioModal(true);
    }
  };

  // show images modal
  // This method will check the whether the images is present or not
  const checkImagesShowImagesModal = () => {
    const images = data?.clickedImagesList?.length;
    if (images === undefined || images === null || images === 0) {
      ToastUtils.error("No images shared");
    } else {
      setShowImageModal(true);
    }
  };

  const handlePrint = () => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";
    document.body.appendChild(iframe);

    const doc = iframe.contentDocument || iframe.contentWindow?.document;

    if (doc) {
      doc.open();
      doc.write(`
            <html>
                <head>
                    <title>Print Image</title>
                    <style>
                        @media print {
                            @page {
                                margin: 0;
                            }
                            body {
                                margin: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 100%;
                                -webkit-print-color-adjust: exact;
                            }
                            img {
                                max-width: 100%;
                                max-height: 100%;
                            }
                        }
                    </style>
                </head>
                <body>
                    <img src="${data?.ptpImageUrl}" />
                </body>
            </html>
        `);
      doc.close();

      iframe.onload = () => {
        if (iframe.contentWindow) {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
          document.body.removeChild(iframe);
        }
      };
    } else {
      console.error("Failed to access iframe document.");
    }
  };

  let invalidMobileNumber = true;
  const regex = /^[6-9]\d{9}$/;
  if (data?.mobileNumber && regex.test(data.mobileNumber)) {
    invalidMobileNumber = false;
  } else {
    invalidMobileNumber = true;
  }

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size={"xl"}
        scrollable
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {data?.patientName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <ViewPrescriptionLoader />
          ) : (
            <>
              <div className="row ">
                <div className="col-11 shadow">
                  <img loading="eager" src={data?.ptpImageUrl}></img>
                </div>

                <div className="col-1 position-relative z-0  p-1">
                  <div className="position-fixed d-flex  align-items-center flex-column ">
                    <div className="col w-100 d-flex justify-content-center">
                      <button
                        className={`border-0 bg-white  ${
                          invalidMobileNumber && "text-gray "
                        }`}
                        onClick={() => {
                          if (invalidMobileNumber) {
                            ToastUtils.error("Invalid mobile number");
                          }
                        }}
                      ></button>

                      <ShareRxDropDown
                        patientName={data?.patientName}
                        mobileNumber={data?.mobileNumber}
                        ptpId={data?.ptpId}
                        invalidMobileNumber={invalidMobileNumber}
                      />
                    </div>
                    <div className="col w-100 d-flex justify-content-center">
                      <button className="btn" onClick={() => handlePrint()}>
                        <div>Print</div>
                        <img height={34} width={34} src={printerImage} alt="" />
                      </button>
                    </div>

                    <>
                      <div className="col w-100 d-flex justify-content-center">
                        <button
                          className={`btn`}
                          onClick={checkAndShowVideoModal}
                        >
                          <PlaySVG
                            fillColor={`${
                              data?.videosList?.length === 0 ||
                              data?.videosList?.length === undefined
                                ? "#aeaeae"
                                : "#6c5dd3"
                            }`}
                          />
                        </button>
                      </div>
                      <PrescriptionVideoThumbNail
                        prescriptionVideosList={data?.videosList}
                        setVideoModal={setShowVideoModal}
                        showVideoModal={showVideoModal}
                      />
                    </>

                    <div className="col w-100 d-flex justify-content-center">
                      <button className="btn" onClick={checkAndShowAudioModal}>
                        <AudioSVG
                          fillColor={`${
                            data?.audioUrl === null ||
                            data?.audioUrl === undefined ||
                            data.audioUrl === ""
                              ? "#aeaeae"
                              : "#6c5dd3"
                          }`}
                        />
                      </button>
                      {
                        <PrescriptionAudio
                          audioUrl={data?.audioUrl}
                          setShowAudioModal={setShowAudioModal}
                          showAudioModal={showAudioModal}
                        />
                      }
                    </div>

                    <div className="col w-100 d-flex justify-content-center">
                      <button
                        className="btn"
                        onClick={checkImagesShowImagesModal}
                      >
                        <ImageSVG
                          fillColor={`${
                            data?.clickedImagesList?.length === 0 ||
                            data?.clickedImagesList?.length === undefined
                              ? "#aeaeae"
                              : "#6c5dd3"
                          }`}
                        />
                      </button>
                      <PrescriptionImages
                        setShowImageModal={setShowImageModal}
                        showImageModal={showImageModal}
                        prescriptionImagesList={data?.clickedImagesList}
                      />
                    </div>

                    <div className="col w-100 d-flex justify-content-center">
                      <button
                        className={`btn border border-0 ${
                          data?.leadSharedList?.length === 0 ||
                          data?.leadSharedList?.length === undefined
                            ? "disabled"
                            : "#6c5dd3"
                        } `}
                        onClick={() => setShowLeadShared(true)}
                      >
                        <div>Reference</div>
                        <img
                          src={leadShared}
                          alt=""
                          className={`bg-purple rounded rounded-2 `}
                          height={34}
                          width={34}
                        />
                      </button>
                      <LeadSharedModal
                        prescriptionLeadSharedList={data?.leadSharedList}
                        showLeadSharedModal={showLeadShared}
                        setShowLeadSharedModal={setShowLeadShared}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewPrescription;
