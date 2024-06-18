import { FC } from "react";
import InformationIconSVG from "../../src/assets/InformationIconSVG";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
interface InformationButtonProps {
  text: string;
}
const InformationButton: FC<InformationButtonProps> = ({ text }) => {
  return (
    <>
      <div className="col  d-flex justify-content-end">
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip className="custom-tooltip ">{text}</Tooltip>}
        >
          <button className="g-0 bg-white border-0">
            <InformationIconSVG />
          </button>
        </OverlayTrigger>
      </div>
    </>
  );
};

export default InformationButton;
