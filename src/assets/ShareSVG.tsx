import { FC } from "react";
import { LogoSVGProps } from "../abstraction/UI/interface";
import { DEFAULT_SVG_PROPS } from "../utils/Constants";
const ShareSVG: FC<LogoSVGProps> = ({
  width = DEFAULT_SVG_PROPS.width,
  height = DEFAULT_SVG_PROPS.height,
  fillColor = DEFAULT_SVG_PROPS.fillColor,
}) => {
  return (
    <>
      <div className="">Share Rx</div>
      <div>
        <svg
          width={width}
          height={height}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={44} height={44} rx={11} fill={fillColor} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.727 13.4008C23.727 10.7369 25.8363 8.57739 28.4382 8.57739C31.0402 8.57739 33.1495 10.7369 33.1495 13.4008C33.1495 16.0647 31.0402 18.2242 28.4382 18.2242C27.0471 18.2242 25.7969 17.607 24.9345 16.6254L20.9954 18.8251L16.5879 21.4037C16.9798 22.1073 17.2037 22.9217 17.2037 23.7897C17.2037 24.2295 17.1462 24.6556 17.0385 25.0605L24.9345 29.4699C25.7969 28.4883 27.0471 27.871 28.4382 27.871C31.0402 27.871 33.1495 30.0306 33.1495 32.6945C33.1495 35.3584 31.0402 37.5179 28.4382 37.5179C25.8363 37.5179 23.727 35.3584 23.727 32.6945C23.727 32.2546 23.7845 31.8286 23.8922 31.4237L15.9963 27.0142C15.1339 27.9958 13.8836 28.6131 12.4925 28.6131C9.89054 28.6131 7.78125 26.4536 7.78125 23.7897C7.78125 21.1258 9.89054 18.9663 12.4925 18.9663C13.4357 18.9663 14.3142 19.2501 15.0509 19.7388L19.9353 16.8813L23.8922 14.6716C23.7845 14.2667 23.727 13.8406 23.727 13.4008ZM28.4382 10.8036C27.0372 10.8036 25.9014 11.9664 25.9014 13.4008C25.9014 14.8352 27.0372 15.998 28.4382 15.998C29.8393 15.998 30.975 14.8352 30.975 13.4008C30.975 11.9664 29.8393 10.8036 28.4382 10.8036ZM12.4925 21.1925C11.0914 21.1925 9.95567 22.3553 9.95567 23.7897C9.95567 25.2241 11.0914 26.3869 12.4925 26.3869C13.8935 26.3869 15.0293 25.2241 15.0293 23.7897C15.0293 22.3553 13.8935 21.1925 12.4925 21.1925ZM25.9014 32.6945C25.9014 31.26 27.0372 30.0972 28.4382 30.0972C29.8393 30.0972 30.975 31.26 30.975 32.6945C30.975 34.1289 29.8393 35.2917 28.4382 35.2917C27.0372 35.2917 25.9014 34.1289 25.9014 32.6945Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
};

export default ShareSVG;
