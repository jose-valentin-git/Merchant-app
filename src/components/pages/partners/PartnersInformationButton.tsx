import { OverlayTrigger, Tooltip } from "react-bootstrap";
import InformationIconSVG from "../../../assets/InformationIconSVG";
import { FC } from "react";
interface InformationButtonProps {
  email: string;
  phoneNumber: string;
}
const PartnersInformationButton: FC<InformationButtonProps> = ({
  email,
  phoneNumber,
}) => {
  return (
    <>
      <div className="col  d-flex justify-content-end">
        <div>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip
                className="custom-tooltip "
                style={{
                  width: "20vw",
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-around">
                    <div className="border">Email</div>
                    <div className="border">{email}</div>
                  </div>
                  <div className="d-flex align-items-center justify-content-around">
                    <div>Phone Number</div>
                    <div>{phoneNumber}</div>
                  </div>
                </div>
              </Tooltip>
            }
          >
            <button className="g-0 bg-white border-0">
              <InformationIconSVG />
            </button>
          </OverlayTrigger>
        </div>
      </div>
    </>
  );
};

export default PartnersInformationButton;
