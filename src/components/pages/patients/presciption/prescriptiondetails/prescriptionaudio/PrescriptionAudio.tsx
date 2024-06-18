import { FC } from "react";
import { Modal } from "react-bootstrap";
import AudioPlayer from "./AudioPlayer";
interface PrescriptionAudioProps {
  audioUrl: string | undefined | null;
  setShowAudioModal: (showImages: boolean) => void;
  showAudioModal: boolean | false;
}
const PrescriptionAudio: FC<PrescriptionAudioProps> = ({
  audioUrl,
  setShowAudioModal,
  showAudioModal,
}) => {
  return (
    <Modal
      size="lg"
      centered
      show={showAudioModal}
      onHide={() => {
        setShowAudioModal(false);
      }}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Audio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {audioUrl ? (
          <AudioPlayer src={audioUrl} showAudioModal={showAudioModal} />
        ) : (
          <div className="text-center">No Audio Shared</div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PrescriptionAudio;
