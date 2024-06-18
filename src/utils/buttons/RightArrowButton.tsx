import { FC } from "react";
import RightArrowSVG from "../../assets/RightArrowSVG";
interface RightArrowButtonProps {
  fillColor: string;
  styleWidth: string;
  styleBackground: string;
}

const RightArrowButton: FC<RightArrowButtonProps> = ({
  fillColor,
  styleWidth,
  styleBackground,
}) => {
  return (
    <div className="d-flex">
      <div className="border-0 rounded-3 btn ">
        <RightArrowSVG
          fillColor={fillColor}
          styleWidth={styleWidth}
          styleBackground={styleBackground}
        />
      </div>
    </div>
  );
};

export default RightArrowButton;
