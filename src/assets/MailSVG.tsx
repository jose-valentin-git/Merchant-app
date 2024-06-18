import { FC } from "react";
import { LogoSVGProps } from "../abstraction/UI/interface";
import { DEFAULT_SVG_PROPS } from "../utils/Constants";

const MailSVG: FC<LogoSVGProps> = ({
  height = DEFAULT_SVG_PROPS.height,
  width = DEFAULT_SVG_PROPS.width,
}) => {
  return (
    <div>
      <svg
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64 64"
        xmlSpace="preserve"
      >
        <style type="text/css">
          {
            "\n\t.st0{fill:#77B3D4;}\n\t.st1{opacity:0.2;}\n\t.st2{fill:#231F20;}\n\t.st3{fill:#FFFFFF;}\n"
          }
        </style>
        <g id="Layer_1">
          <g>
            <circle className="st0" cx={32} cy={32} r={32} />
          </g>
          <g className="st1">
            <path
              className="st2"
              d="M32,12c-12.1,0-22,9.9-22,22s9.9,22,22,22c3.5,0,7-0.8,10.1-2.4c1-0.5,1.4-1.7,0.9-2.7s-1.7-1.4-2.7-0.9 c-2.6,1.3-5.3,2-8.2,2c-9.9,0-18-8.1-18-18s8.1-18,18-18s18,8.1,18,18c0,3-0.8,6-2.2,8.6c-1.8-1.4-4.4-4.2-4.4-8.5v-8.8 c0-1.1-0.9-2-2-2s-2,0.9-2,2v0.1c-2-1.7-4.6-2.8-7.4-2.8c-6.3,0-11.4,5.1-11.4,11.4S25.7,45.4,32,45.4c3.7,0,7-1.8,9.1-4.6 c2.3,4.2,6.2,6.3,6.4,6.4c0.9,0.5,2,0.2,2.6-0.6c2.6-3.7,3.9-8,3.9-12.6C54,21.9,44.1,12,32,12z M32,41.4c-4.1,0-7.4-3.3-7.4-7.4 c0-4.1,3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4C39.4,38.1,36.1,41.4,32,41.4z"
            />
          </g>
          <g>
            <path
              className="st3"
              d="M32,54c-12.1,0-22-9.9-22-22s9.9-22,22-22s22,9.9,22,22c0,4.5-1.4,8.9-3.9,12.6c-0.6,0.8-1.7,1.1-2.6,0.6 c-0.3-0.2-8.1-4.2-8.1-13.1v-8.8c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2v8.8c0,4.3,2.6,7.1,4.4,8.5C49.2,38,50,35,50,32 c0-9.9-8.1-18-18-18s-18,8.1-18,18s8.1,18,18,18c2.9,0,5.7-0.7,8.2-2c1-0.5,2.2-0.1,2.7,0.9c0.5,1,0.1,2.2-0.9,2.7 C39,53.2,35.5,54,32,54z"
            />
          </g>
          <g>
            <path
              className="st3"
              d="M32,24.6c4.1,0,7.4,3.3,7.4,7.4s-3.3,7.4-7.4,7.4s-7.4-3.3-7.4-7.4S27.9,24.6,32,24.6 M32,20.6 c-6.3,0-11.4,5.1-11.4,11.4S25.7,43.4,32,43.4S43.4,38.3,43.4,32S38.3,20.6,32,20.6L32,20.6z"
            />
          </g>
        </g>
        <g id="Layer_2" />
      </svg>
    </div>
  );
};

export default MailSVG;
