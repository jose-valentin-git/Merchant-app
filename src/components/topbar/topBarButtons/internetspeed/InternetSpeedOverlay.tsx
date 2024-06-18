import { FC } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import InternetConnectivitySVG from "../../../../assets/topbaricons/InternetConnectivitySVG";

const InternetSpeedOverlay: FC = () => {
  const popover = (
    <Popover id="popover-basic" className="w-100">
      <Popover.Header as="h3">Internet Speed</Popover.Header>
      <Popover.Body>
        <div className="row">
          <div className="col border-end">
            <div className=" bg-palepurple">
              <strong>111</strong> Mbps
            </div>
            Download speed
          </div>
          <div className="col">
            <div className=" bg-palepurple">
              <strong>111</strong> Mbps
            </div>
            Upload speed
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <div className="col d-flex align-items-center justify-content-center">
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: "#9AC2FF" }}
        >
          <InternetConnectivitySVG />
        </button>
      </div>
    </OverlayTrigger>
  );
};

export default InternetSpeedOverlay;
