import React, { useEffect, useRef } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { useDownloadMedia } from "../../hooks/useMediaHelper";

const VideoPlayerDialog: React.FC<{
  mediaId?: number;
  show: boolean;
  setShow: (param: boolean) => void;
}> = ({ mediaId, show, setShow }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { data, isLoading, refetch } = useDownloadMedia(mediaId);

  console.log("video media id ", mediaId);

  useEffect(() => {
    refetch();
  }, [mediaId]);

  if (!show || !mediaId) return null;

  return (
    <>
      <Modal
        onHide={() => setShow(false)}
        show={show}
        scrollable
        centered
        size={"lg"}
      >
        <Modal.Header closeButton>
          <Modal.Title>ALS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <Spinner />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              className="object-fit-cover border rounded"
              src={data}
              style={{ height: "100%", width: "100%" }}
              controls
            ></video>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoPlayerDialog;
