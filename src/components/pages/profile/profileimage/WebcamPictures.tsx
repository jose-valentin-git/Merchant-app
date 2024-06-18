import { FC, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { uploadProfileProfileImage } from "../../../../services/DoctorProfileService";
import ToastUtils from "../../../../utils/ToastUtils";

interface WebcamPicturesProps {
  showWebCamModel: boolean;
  setShowDropDow: (showDeopDown: boolean) => void;
  setShowWebCamModel: (showWebCam: boolean) => void;
  refetch: () => void;
}

const WebcamPictures: FC<WebcamPicturesProps> = ({
  showWebCamModel,
  setShowWebCamModel,
  setShowDropDow,
  refetch,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLCanvasElement>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const [imageClicked, setImageClicked] = useState<boolean>(false);
  const [streamReady, setStreamReady] = useState<boolean>(false); // New state variable to track if the stream is ready

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        const video = videoRef.current;

        if (!video) {
          return;
        }

        video.srcObject = stream;
        mediaStreamRef.current = stream;
        video.onloadedmetadata = () => {
          video.play(); // Play the video once metadata is loaded
          setStreamReady(true); // Set streamReady to true
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (showWebCamModel) {
      getUserCamera();
    } else {
      // Close the camera when the component unmounts or modal is closed
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
        setStreamReady(false); // Reset streamReady state
      }
    }

    return () => {
      // Cleanup function to stop the media stream when component unmounts
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
        setStreamReady(false); // Reset streamReady state
      }
    };
  }, [showWebCamModel]);

  const takePicture = () => {
    if (photoRef.current && videoRef.current) {
      const width = videoRef.current.videoWidth;
      const height = videoRef.current.videoHeight;
      const photo = photoRef.current;
      const video = videoRef.current;

      photo.width = width;
      photo.height = height;
      const ctx = photo.getContext("2d");

      if (ctx) {
        ctx.drawImage(video, 0, 0, width, height);
        setImageClicked(true);
      }
      return photo;
    }
  };

  const handleClose = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
    }
    setTimeout(() => {
      setShowWebCamModel(false);
      setShowDropDow(false);
    }, 1);
  };

  const handleVideoClick = () => {
    if (streamReady) {
      takePicture();
      setImageClicked(true);
    }
  };

  const handleSave = () => {
    if (photoRef.current) {
      const canvas = photoRef.current;
      const imageData = canvas.toDataURL(); // Get image data from canvas
      console.log(imageData);
      fetch(imageData)
        .then((res) => res.blob())
        .then((blob) => {
          const formData = new FormData();
          formData.append("media", blob, "image.png");
          uploadProfileProfileImage(formData)
            .then(() => {
              setShowWebCamModel(false);
              setShowDropDow(false);
              refetch();
              ToastUtils.success("Image uploaded successfully");
            })
            .catch((error) => {
              ToastUtils.success("Something went wrong");
              console.log("Error in uploading image", error);
            });
        })
        .catch((error) => {
          console.log("Error converting data URL to Blob : ", error);
        });
    }
  };

  return (
    <div>
      <Modal
        size="lg"
        show={showWebCamModel}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Click Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="text-center">
              Click anywhere on video to capture an image
            </div>
            <video
              className="container-fluid"
              ref={videoRef}
              onClick={handleVideoClick}
            />
            {imageClicked && (
              <div className="row d-flex align-items-center justify-content-center">
                <button
                  className="col-3 btn bg-purple btn-hover text-white"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            )}
            <canvas className="container-fluid mt-1" ref={photoRef}></canvas>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WebcamPictures;
