import React, { useState, useEffect } from "react";
import FastForwardAudio from "../../../../../../assets/FastForwardAudio";
import FastBackWardAudio from "../../../../../../assets/FastBackWardAudio";
import PlayAudio from "../../../../../../assets/PlayAudio";
import PauseAudio from "../../../../../../assets/PauseAudio";

const AudioPlayer: React.FC<{ src: string; showAudioModal: boolean }> = ({
  src,
  showAudioModal,
}) => {
  const [audio] = useState(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [wasPlayingBeforeSkip, setWasPlayingBeforeSkip] = useState(false);

  useEffect(() => {
    const timeUpdateHandler = () => {
      setCurrentTime(audio.currentTime);
    };
    audio.addEventListener("timeupdate", timeUpdateHandler);
    return () => {
      audio.removeEventListener("timeupdate", timeUpdateHandler);
    };
  }, [audio]);

  useEffect(() => {
    const loadedMetadataHandler = () => {
      setTotalTime(audio.duration);
    };
    audio.addEventListener("loadedmetadata", loadedMetadataHandler);
    return () => {
      audio.removeEventListener("loadedmetadata", loadedMetadataHandler);
    };
  }, [audio]);

  useEffect(() => {
    audio.pause();
  }, [showAudioModal]);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    audio.currentTime = time;
  };

  const skipForward = () => {
    setWasPlayingBeforeSkip(isPlaying);
    audio.currentTime += 5;
    if (wasPlayingBeforeSkip) {
      audio.play();
    }
  };

  const skipBackward = () => {
    setWasPlayingBeforeSkip(isPlaying);
    audio.currentTime -= 5;
    if (wasPlayingBeforeSkip) {
      audio.play();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <input
        type="range"
        className="w-100"
        value={currentTime}
        max={isNaN(totalTime) ? "" : totalTime.toString()}
        onChange={handleSeek}
        step="0.01"
      />
      <div className="d-flex align-items-center justify-content-between">
        <div>{formatTime(currentTime)}</div>
        <div>{formatTime(totalTime)}</div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <button className="btn" onClick={skipBackward}>
            <FastBackWardAudio />
          </button>
          <button className="btn" onClick={toggleAudio}>
            {isPlaying ? <PauseAudio /> : <PlayAudio />}
          </button>
          <button className="btn" onClick={skipForward}>
            <FastForwardAudio />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
