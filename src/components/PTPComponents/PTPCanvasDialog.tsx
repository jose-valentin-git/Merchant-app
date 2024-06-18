import { Modal, Button, Row, Col } from "react-bootstrap";
import AudioRecorderComponent from "./AudioRecorderComponent";
import VideoPlayerDialog from "./VIdeoPlayer";
import { useEffect } from "react";

interface CanvasProps {
  // showModalRef: React.MutableRefObject<boolean>;
  show: boolean;
  handlePtpSubmit?: () => void;
  canvasRef: any;
  audioChunksRef: React.RefObject<Blob[]>;
  record: boolean;
  mediaRecorderRef: React.MutableRefObject<MediaRecorder | null>;
  setRecord: (param: boolean) => void;
  audio: string | undefined;
  setAudio: (param: string) => void;
  showVideoDialog: boolean;
  setVideoDialog: (param: boolean) => void;
  videoMediaId: number;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  onPageChange: (book: number, page: number) => void;
  currentPage: React.MutableRefObject<
    | {
        book: number;
        page: number;
      }
    | undefined
  >;
}

function PTPCanvasDialog({
  // showModalRef,
  show,
  handlePtpSubmit,
  canvasRef,
  audio,
  audioChunksRef,
  mediaRecorderRef,
  setAudio,
  record,
  setRecord: setAudioDialog,
  showVideoDialog,
  setVideoDialog,
  videoMediaId,
  modalRef,
  onPageChange,
  currentPage,
}: CanvasProps) {
  useEffect(() => {
    onPageChange(currentPage.current?.book!, currentPage.current?.page!);
  }, []);

  return (
    <>
      <Modal
        // onBackdropClick={() => toast.error("Submit PTP")}
        centered
        dialogClassName="modal-90w"
        scrollable
        show={show}
        keyboard={false}
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>Prescription</Modal.Title>
          <Button
            variant="outline-primary "
            size="lg"
            className="ms-auto"
            onClick={handlePtpSubmit}
          >
            Submit
          </Button>
        </Modal.Header>
        <Modal.Body ref={modalRef}>
          <Row>
            <Col>
              <canvas ref={canvasRef} style={{ border: "1px black dashed" }} />
            </Col>
            <Col>
              <Row>
                <AudioRecorderComponent
                  setShow={setAudioDialog}
                  record={record}
                  mediaRecorder={mediaRecorderRef}
                  audioChunksRef={audioChunksRef}
                  audio={audio}
                  setAudio={setAudio}
                />
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {showVideoDialog && (
        <VideoPlayerDialog
          show={showVideoDialog}
          setShow={setVideoDialog}
          mediaId={videoMediaId}
        />
      )}
    </>
  );
}

export default PTPCanvasDialog;
