import { FC } from "react";
interface InvertedLeadShareSVGProps {
  width?: number | 44;
  height?: number | 44;
}
const InvertedLeadShareSVG: FC<InvertedLeadShareSVGProps> = ({
  width,
  height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 3C7 3 9 3.6 9 6C9 8.4 7 9 6 9H18M6 3H18C19 3 21 3.6 21 6C21 8.4 19 9 18 9M6 3C5 3 3 3.6 3 6C3 8.06801 3 14.4919 3 19.0018C3 20.1064 3.89543 21 5 21H10.5M18 9V10M7 13H10M7 17H10"
        stroke="#6c5dd3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M14 19V16M16 16H17.5C18.3284 16 19 15.3284 19 14.5V14.5C19 13.6716 18.3284 13 17.5 13H14V16M16 16L19 19M16 16H14M21 21L19 19M19 19L21 17M19 19L17 21"
        stroke="#6c5dd3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
};

export default InvertedLeadShareSVG;
