import React, { useEffect, useRef, useState } from "react";
import ToastUtils from "../../utils/ToastUtils";
import { Button, Row } from "react-bootstrap";
import recordingGif from "../../assets/output-onlinegiftools.gif";

const AudioRecorderComponent: React.FC<{
  audioChunksRef: React.RefObject<Blob[]>;
  record: boolean;
  mediaRecorder: React.MutableRefObject<MediaRecorder | null>;
  setShow: (param: boolean) => void;
  audio: string | undefined;
  setAudio: (param: string) => void;
}> = ({ audioChunksRef, record, setShow, mediaRecorder, audio, setAudio }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (record) {
      getMicrophonePermission();
    } else {
      stopRecording();
    }
  }, [record]);

  const stopRecording = async () => {
    if (mediaRecorder && mediaRecorder.current) {
      mediaRecorder.current.onstop = () => {
        if (audioChunksRef.current) {
          //creates a blob file from the audiochunks data
          const audioBlob = new Blob(audioChunksRef.current);
          //creates a playable URL from the blob file.
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudio(audioUrl);
        }
      };
      mediaRecorder.current.stream.getTracks().forEach((t) => t.stop());
      mediaRecorder.current.stop();
    }
  };
  const getMicrophonePermission = async () => {
    try {
      const streamData = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      mediaRecorder.current = new MediaRecorder(streamData);
      startRecording(streamData);
    } catch (err) {
      const error = err as Error;
      ToastUtils.error("Error: " + error.message);
      setShow(false);
    }
  };
  const startRecording = (stream: MediaStream) => {
    if (stream) {
      const media = new MediaRecorder(stream, {
        mimeType: "audio/webm",
      });
      mediaRecorder.current = media;
      mediaRecorder.current.start();

      mediaRecorder.current.ondataavailable = (event) => {
        if (!audioChunksRef.current) return;
        if (typeof event.data === "undefined") return;
        if (event.data.size === 0) return;
        audioChunksRef.current.push(event.data);
      };
    }
  };

  const handlePlayButtonClicked = () => {
    if (!audioPlayerRef.current) return;
    if (isAudioPlaying) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current.currentTime = 0;
      setIsAudioPlaying(false);
    } else {
      audioPlayerRef.current.play();
      setIsAudioPlaying(true);
    }
  };

  return (
    <>
      {record && (
        <Row>
          <img style={{ height: "50px", width: "50px" }} src={recordingGif} />
          <p>Recording</p>
        </Row>
      )}
      {audio && audio.trim() !== "" && (
        <div>
          <Button onClick={() => handlePlayButtonClicked()}>
            {" "}
            {isAudioPlaying ? "◼️ Stop" : " ▷ Play"}
          </Button>
          <audio ref={audioPlayerRef} src={audio} controls></audio>
        </div>
      )}
    </>
  );
};

export default AudioRecorderComponent;
