import { FC, useState } from "react";
import { Modal } from "react-bootstrap";
import CloseSVG from "../../../../../../assets/CloseSVG";

interface PrescriptionVideoThumbNailProps {
  prescriptionVideosList: string[] | null | undefined;
  setVideoModal: (videoModal: boolean) => void;
  showVideoModal: boolean;
}

const PrescriptionVideoThumbNail: FC<PrescriptionVideoThumbNailProps> = ({
  prescriptionVideosList,
  setVideoModal,
  showVideoModal,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const handleVideoClick = (url: string) => {
    setSelectedVideo(url);
    setVideoModal(true);
  };
  return (
    <Modal
      size="lg"
      show={showVideoModal}
      onHide={() => setVideoModal(false)}
      centered
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Video Thumbnails
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedVideo ? (
          <div className="container-fluid">
            <div className="row d-flex justify-content-end my-1 ">
              <div className="col-1 close-btn  ">
                <div
                  className="d-flex rounded rounded-1 justify-content-center p-1"
                  onClick={() => {
                    setSelectedVideo(null);
                  }}
                >
                  <CloseSVG />
                </div>
              </div>
            </div>
            <div className="row ">
              <video width="100%" controls autoPlay>
                <source
                  src={selectedVideo}
                  className="rounded rounded-1"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row p-2">
              <div className="row-cols-2 d-flex flex-wrap">
                {prescriptionVideosList?.map((url, index) => (
                  <div className="col p-2" key={index}>
                    <video
                      width="100%" // Adjust width to ensure each video takes half of the row
                      className="rounded rounded-1"
                      onClick={() => {
                        handleVideoClick(url);
                      }}
                    >
                      <source src={url} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PrescriptionVideoThumbNail;
