import { FC } from "react";
import WondrxLogoSVG from "../../assets/WondrxLogoSVG";
interface WondrxLogoProps {
  width: string | "7vh";
  height: string | "7vh";
}
const WondrxLogo: FC<WondrxLogoProps> = ({ width, height }) => {
  return (
    <div className="row my-3">
      <div className=" d-flex align-items-center justify-content-center">
        <div className="bg-light rounded-circle text-center p-2 overflow-hidden d-flex">
          <WondrxLogoSVG width={width} height={height} />
        </div>
      </div>
    </div>
  );
};

export default WondrxLogo;
