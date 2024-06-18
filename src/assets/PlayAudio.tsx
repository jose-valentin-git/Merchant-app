import { FC } from "react";

const PlayAudio: FC = () => {
  return (
    <div>
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="-60 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "5vh",
          height: "5vh",
        }}
      >
        <title>{"play"}</title>
        <path d="M64 96L328 256 64 416 64 96Z" />
      </svg>
    </div>
  );
};

export default PlayAudio;
