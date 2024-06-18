import { FC, useState } from "react";
import { Modal } from "react-bootstrap";

interface PrescriptionImagesProps {
  prescriptionImagesList: string[] | null | undefined;
  setShowImageModal: (showImages: boolean) => void;
  showImageModal: boolean | false;
}

const PrescriptionImages: FC<PrescriptionImagesProps> = ({
  prescriptionImagesList,
  setShowImageModal,
  showImageModal,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (prescriptionImagesList) {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? prescriptionImagesList.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (prescriptionImagesList) {
      setActiveIndex((prevIndex) =>
        prevIndex === prescriptionImagesList.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <Modal
      size="lg"
      centered
      show={showImageModal}
      onHide={() => {
        setShowImageModal(false);
      }}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Images</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {prescriptionImagesList && prescriptionImagesList.length > 0 ? (
          <>
            <div className="d-flex justify-content-center">
              <div className="text-purple  fw-bolder w-100 d-flex justify-content-around ">
                <div>Image : {activeIndex + 1}</div>
                <div className="d-flex ">
                  Number of images shared: {prescriptionImagesList.length}
                </div>
              </div>
            </div>
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {prescriptionImagesList.map((url, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    <img src={url} className="d-block w-100" alt="..." />
                  </div>
                ))}
              </div>
              {activeIndex !== 0 && (
                <>
                  <button
                    className="text-center carousel-control-prev"
                    type="button"
                  >
                    <span
                      className="bg-dark rounded rounded-circle carousel-control-prev-icon"
                      aria-hidden="true"
                      onClick={handlePrev}
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                </>
              )}
              {activeIndex !== prescriptionImagesList.length - 1 && (
                <>
                  <button
                    className="text-center carousel-control-next"
                    type="button"
                  >
                    <span
                      className="bg-dark rounded rounded-circle carousel-control-next-icon"
                      aria-hidden="true"
                      onClick={handleNext}
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">No images Shared</div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PrescriptionImages;
