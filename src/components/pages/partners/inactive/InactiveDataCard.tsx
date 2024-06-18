import { FC } from "react";
import { ActiveDTO } from "../../../../model/ActiveDTO";

import PartnersAccordion from "../PartnersAccordion";
interface InactiveDataCardProps {
  inActivePartnersData?: ActiveDTO;
  refetch: () => void;
  index: string;
}
const InactiveDataCard: FC<InactiveDataCardProps> = ({
  inActivePartnersData,
  refetch,
  index,
}) => {
  return (
    <div className={`container-fluid mb-3 g-0 `}>
      <div className="rounded-3 border">
        <div className="row p-3">
          <div className="col-2 d-flex flex-column align-items-center  border-left border-end me-2">
            <div className="row">
              <div className="d-flex">
                <img
                  src={inActivePartnersData?.partnerTypeDto?.serviceIcon}
                  style={{
                    width: "15vh",
                  }}
                  alt="partners"
                />
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center mt-2 fw-bolder">
              {inActivePartnersData?.partnerName}
            </div>
          </div>
          <div className="col">
            <div className="row border-bottom">
              <div className="col">
                <div className="text-center">Rx shared</div>
                <div className="fw-bolder text-center">
                  {inActivePartnersData?.rxSharedCount}
                </div>
              </div>
              <div className="col">
                <div className="text-center">Rx Accepted</div>
                <div className="fw-bolder text-center">
                  {inActivePartnersData?.rxAcceptedCount}
                </div>
              </div>
              <div className="col">
                <div className="text-center">Rx Rejected</div>
                <div className="fw-bolder text-center">
                  {inActivePartnersData?.rxRejectedCount}
                </div>
              </div>
              <div className="col">
                <div className="text-center">Rx Expired</div>
                <div className="fw-bolder text-center">
                  {inActivePartnersData?.rxExpiredCount}
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <PartnersAccordion
                date={inActivePartnersData?.partnerOnBoardingDate!}
                email={inActivePartnersData?.partnerEmail!}
                address={inActivePartnersData?.address!}
                mobileNumber={inActivePartnersData?.partnerMobileNumber!}
                partnerId={inActivePartnersData?.partnerId!}
                active={false}
                refetch={refetch}
                index={index}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InactiveDataCard;
