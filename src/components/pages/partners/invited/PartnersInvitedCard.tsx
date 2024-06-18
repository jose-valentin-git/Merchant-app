import { FC } from "react";
import PhoneSVG from "../../../../assets/PhoneSVG";
import { CrossSVG } from "../../../../assets/CrossSVG";
import whatsAppImage from "../../../../assets/WhatsApp Inc. - png.png";
import { InvitedDTO } from "../../../../model/InvitedDTO";
import { Accordion } from "react-bootstrap";
import { useRemoveInvitedPartener } from "../../../../hooks/usePartnerHelper";
import ToastUtils from "../../../../utils/ToastUtils";
import { AxiosError } from "axios";
import DateUtils from "../../../../utils/formatDate";
interface PartnersInvitedCardProps {
  partersDetails: InvitedDTO | undefined;
  refetch: () => void;
}
const PartnersInvitedCard: FC<PartnersInvitedCardProps> = ({
  partersDetails,
  refetch,
}) => {
  function checkCurrentStatus(status?: string) {
    if (status === "INVITED") return "To Be Accepted";
    else if (status === "ONBOARDED") return "To Be Mapped";
    else if (status === "ACTIVE") return "Active";
  }

  const handleOnCrossButtonClick = async (invitedId?: number) => {
    try {
      const invitedRemovedResponse = await useRemoveInvitedPartener(invitedId);
      refetch();
      if (invitedRemovedResponse) ToastUtils.success(invitedRemovedResponse);
    } catch (e) {
      const err = e as AxiosError;
      ToastUtils.error(err.message);
    }
  };
  return (
    <>
      <div className="container-fluid g-0">
        <div className="border rounded-3 mb-3">
          <div className="row p-3">
            <div className="col-2 d-flex flex-column align-items-center justify-content-center border-left">
              <div className="row">
                <div className="d-flex">
                  <img
                    src={partersDetails?.partnerTypeDto?.serviceIcon}
                    style={{
                      width: "15vh",
                    }}
                    alt="partners"
                  />
                </div>
              </div>
              <div className="row d-flex align-items-center justify-content-center mt-2 fw-bolder">
                {partersDetails?.name || "-------"}
              </div>
            </div>
            <div className="col m-1">
              <Accordion>
                <Accordion.Item eventKey="0" className="border-0">
                  <Accordion.Header>
                    {/* Entre code is here */}
                    <div className="col-2 d-flex justify-items-center">
                      <div className="d-flex align-items-start justify-content-center flex-column">
                        <p>Invited on</p>
                        <h5>
                          {DateUtils.formatDisplayDate(
                            partersDetails?.invitedDate || "--------"
                          )}
                        </h5>
                      </div>
                    </div>
                    <div className="col d-flex justify-items-center">
                      <div className="d-flex align-items-start justify-content-center flex-column">
                        {/*  invited -> pending to be accepted
                        on boarded -> pending to be mapped */}
                        <p>Current Status</p>
                        <h5>
                          {checkCurrentStatus(partersDetails?.inviteStatus) ||
                            "------------"}
                        </h5>
                      </div>
                    </div>
                    <div className="col d-flex align-items-center">
                      <div className="col">
                        <div className="row d-flex align-items-center">
                          <div className="col-2">
                            <button className="btn border border-0">
                              <a
                                href={`tel:+91${partersDetails?.mobileNumber}`}
                              >
                                <PhoneSVG />
                              </a>
                            </button>
                          </div>
                          <div className="col-2">
                            <button className="btn border border-0">
                              <a
                                href={`https://wa.me/${partersDetails?.mobileNumber}`}
                                target="_blank"
                              >
                                <img src={whatsAppImage} alt="what's app" />
                              </a>
                            </button>
                          </div>
                          <div className="col">
                            <button
                              className="btn border border-0 "
                              onClick={() => {
                                handleOnCrossButtonClick(partersDetails?.id);
                              }}
                            >
                              <CrossSVG />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    {/* Email and othre things are here */}

                    <div className="row g-0">
                      <div>
                        <div className="d-flex align-items-center justify-content-around">
                          <div className="">Email</div>
                          <div>Phone Number</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-around">
                          <div className="fw-bolder">
                            {partersDetails?.email || "-----------"}
                          </div>
                          <div className="fw-bolder">
                            {partersDetails?.mobileNumber || "------------"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersInvitedCard;
