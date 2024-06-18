import { FC, useState } from "react";
import { PartnerDTO } from "../../../model/PartnerDTO";
interface PartnerCardProps {
  partner: PartnerDTO;
}
const PartnerCard: FC<PartnerCardProps> = ({ partner }) => {
  // This state will maintain the selected partner

  const [partnerHover, setPartnerHover] = useState<boolean>(false);

  return (
    <>
      {" "}
      <div className="">
        <div
          className="m-2 shadow-sm"
          onMouseEnter={() => {
            setPartnerHover(true);
          }}
          onMouseLeave={() => {
            setPartnerHover(false);
          }}
          onClick={() => {
            alert(`${partner.partnerName} is selected`);
          }}
        >
          <div
            className={` ${
              partnerHover && "bg-purple text-white"
            } border p-2 rounded rounded-1`}
          >
            <div className="">
              <div className="row">
                <div className="col-2">Partner</div>
                <div className="col-1">:</div>
                <div className="col">{partner.partnerName}</div>
              </div>
              <div className="row">
                <div className="col-2">Company</div>
                <div className="col-1">:</div>
                <div className="col">{partner.companyName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerCard;
