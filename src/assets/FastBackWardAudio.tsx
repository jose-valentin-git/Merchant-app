import { FC } from "react";

const FastBackWardAudio: FC = () => {
  return (
    <div>
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 76 76"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        baseProfile="full"
        enableBackground="new 0 0 76.00 76.00"
        xmlSpace="preserve"
        style={{
          width: "5vh",
          height: "5vh",
          transform: "rotate(180deg)",
        }}
      >
        <path
          fill="#000000"
          fillOpacity={1}
          strokeWidth={0.2}
          strokeLinejoin="round"
          d="M 19,25L 35.75,38L 19,51L 19,25 Z M 41,25L 57.75,38L 41,51L 41,25 Z "
        />
      </svg>
    </div>
  );
};

export default FastBackWardAudio;
