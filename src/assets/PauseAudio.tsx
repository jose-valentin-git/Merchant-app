import { FC } from "react";

const PauseAudio: FC = () => {
  return (
    <div>
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="-64 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "5vh",
          height: "5vh",
        }}
      >
        <title>{"pause"}</title>
        <path d="M64 96L160 96 160 416 64 416 64 96ZM224 96L320 96 320 416 224 416 224 96Z" />
      </svg>
    </div>
  );
};

export default PauseAudio;
