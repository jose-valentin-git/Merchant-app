import { FC } from "react";

const WrongButtonSVG: FC = () => {
  return (
    <>
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.928909 15.0712L15.071 0.929047"
          stroke="#FF0000"
          strokeWidth={1.65757}
          strokeLinecap="round"
        />
        <path
          d="M0.92891 0.928999L15.071 15.0711"
          stroke="#FF0000"
          strokeWidth={1.65757}
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default WrongButtonSVG;
