import { FC } from "react";

interface RightArrowProperties  {
  fillColor:string;
  styleWidth:string;
  styleBackground:string
}
const RigtArrowSVG:FC<RightArrowProperties> = ({fillColor,styleWidth,styleBackground}) => {
  return (
    <div style={{ background: styleBackground, display: "inline-block", padding: "5px",borderRadius:"8px" }}>
      <svg
        fill={fillColor}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="35%"
        height="45%"
        viewBox="0 0 451.846 451.847"
        xmlSpace="preserve"
        stroke="#6c5dd3"
        style={{
          width: styleWidth,
        }}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path
             d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default RigtArrowSVG;
