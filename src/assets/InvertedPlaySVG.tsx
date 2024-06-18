import { FC } from "react";
interface PlaySVGProps {
  width?: number | 44;
  height?: number | 44;
}
const InvertedPlaySVG: FC<PlaySVGProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={44} height={44} rx={11} fill="white" />{" "}
      {/* Inverted color */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.3202 19.2203C37.1386 20.6274 37.1386 23.3727 35.3202 24.7797C29.8247 29.032 23.6881 32.3836 17.1403 34.7091L15.9441 35.134C13.6556 35.9468 11.2383 34.3984 10.9285 32.0361C10.0629 25.4357 10.0629 18.5644 10.9285 11.964C11.2383 9.60164 13.6556 8.05328 15.9441 8.86607L17.1403 9.29092C23.6881 11.6165 29.8247 14.9681 35.3202 19.2203ZM33.6373 22.6048C34.0329 22.2987 34.0329 21.7014 33.6373 21.3953C28.3723 17.3214 22.4931 14.1103 16.2199 11.8823L15.0237 11.4575C14.428 11.2459 13.7434 11.6491 13.6552 12.3216C12.8207 18.6846 12.8207 25.3155 13.6552 31.6785C13.7434 32.3509 14.428 32.7542 15.0237 32.5426L16.2199 32.1177C22.4931 29.8897 28.3723 26.6787 33.6373 22.6048Z"
        fill="#6C5DD3"
        strokeWidth={5}
      />
    </svg>
  );
};

export default InvertedPlaySVG;
