import { FC } from "react";
import { ActiveDTO } from "../../../../model/ActiveDTO";
import PartnersAccordion from "../PartnersAccordion";

// ActivepartnerCard code starts here
interface ActivePartnerCardProps {
  activePartnersData: ActiveDTO;
  refetch: () => void;
  activeEventKey: string | null;
  setActiveEventKey: (key: string | null) => void;
  index: string;
}

const ActivePartnerCard: FC<ActivePartnerCardProps> = ({
  activePartnersData,
  refetch,
  index,
}) => {
  {
    activePartnersData;
  }

  return (
    <div className={`container-fluid mb-3 g-0 `}>
      <div className="rounded-3 border">
        <div className="row p-3">
          <div className="col-2 d-flex flex-column align-items-center  border-left border-end me-2">
            <div className="row">
              <div className="d-flex">
                <img
                  src={activePartnersData?.partnerTypeDto?.serviceIcon}
                  style={{
                    width: "15vh",
                  }}
                  alt="partners"
                />
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center mt-2 fw-bolder">
              {activePartnersData?.partnerName}
            </div>
          </div>
          <div className="col">
            <div className="row border-bottom">
              <div className="col">
                <div className="text-center">Rx shared</div>
                <div className="fw-bolder text-center">
                  {activePartnersData.rxSharedCount || 0}
                </div>
              </div>
              <div className="col">
                <div className="text-center">Rx Accepted</div>
                <div className="fw-bolder text-center">
                  {activePartnersData.rxAcceptedCount || 0}
                </div>
              </div>
              <div className="col">
                <div className="text-center">Rx Rejected</div>
                <div className="fw-bolder text-center">
                  {activePartnersData.rxRejectedCount || 0}
                </div>
              </div>
              <div className="col">
                <div className="text-center">Rx Expired</div>
                <div className="fw-bolder text-center">
                  {activePartnersData.rxExpiredCount || 0}
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div>
                <PartnersAccordion
                  date={activePartnersData?.partnerOnBoardingDate}
                  email={activePartnersData?.partnerEmail}
                  address={activePartnersData?.address}
                  mobileNumber={activePartnersData?.partnerMobileNumber}
                  partnerId={activePartnersData?.partnerId}
                  active={true}
                  refetch={refetch}
                  index={index}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePartnerCard;
