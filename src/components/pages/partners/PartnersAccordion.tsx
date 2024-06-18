import { FC, ReactNode } from "react";
import whatsAppImage from "../../../assets/WhatsApp Inc. - png.png";
import {
  useDeactivateActivePartner,
  useReactivateInactivePatner,
} from "../../../hooks/usePartnerHelper";
import ToastUtils from "../../../utils/ToastUtils";
import { AxiosError } from "axios";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import DateUtils from "../../../utils/formatDate";
import PhoneSVG from "../../../assets/PhoneSVG";
import AccordionDownArrowSVG from "../../../assets/AccordionDownArrowSVG";
interface ContextAwareToggleProps {
  children: ReactNode;
  eventKey: string;
  callback?: (eventKey: string) => void;
}

const ContextAwareToggle: FC<ContextAwareToggleProps> = ({
  children,
  eventKey,
  callback,
}) => {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    callback && callback(eventKey);
  });
  return (
    <button className="btn" type="button" onClick={decoratedOnClick}>
      {children}
    </button>
  );
};

interface PartnersAccordionProps {
  date: string | Date | null;
  email: string;
  address: string;
  mobileNumber: string;
  partnerId: string;
  active: boolean;
  refetch: () => void;
  index: string;
}
const PartnersAccordion: FC<PartnersAccordionProps> = ({
  date,
  email,
  address,
  mobileNumber,
  partnerId,
  active,
  refetch,
  index,
}) => {
  console.log(partnerId);
  console.log("rendering");
  const handleClick = async (active: boolean, patientId: string) => {
    try {
      if (active) {
        await useDeactivateActivePartner(partnerId!)?.then(() => {
          ToastUtils.success("Partner deactivated");
        });
      } else {
        console.log("removing data", email);
        await useReactivateInactivePatner(patientId!)?.then(() => {
          ToastUtils.success("Partner reactivated");
        });
      }
      refetch();
    } catch (error) {
      const err = error as AxiosError;
      ToastUtils.error(err.message);
    }
  };
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <div className="row">
            <div className="col">
              <div>{active ? "Invited on" : "First Rx "}</div>
              <div className="fw-bolder">
                {DateUtils.formatDisplayDate(date) || "-----"}
              </div>
            </div>
            <div className="col">
              <div className="row d-flex align-items-center">
                <div className="col">
                  <div className="btn border border-0">
                    <a href={`tel:+91${mobileNumber}`}>
                      <PhoneSVG />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="btn border border-0">
                    <a href={`https://wa.me/${mobileNumber}`} target="_blank">
                      <img src={whatsAppImage} alt="what's app" />
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="btn bg-purple text-white btn-hover"
                    onClick={() => {
                      handleClick(active, partnerId);
                    }}
                  >
                    {active ? "Deactivate" : "Reactivate"}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1">
              <ContextAwareToggle eventKey={index}>
                <AccordionDownArrowSVG />
              </ContextAwareToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey={index}>
          <Card.Body className="border border-0">
            <div className="row">
              <div className="col">
                <div>Address</div>
                <div className="fw-bolder">{address || "-----"}</div>
              </div>
              <div className="col">
                <div>Email</div>
                <div className="fw-bolder">{email || "-----"}</div>
              </div>
              <div className="col">
                <div>Phone Number</div>
                <div className="fw-bolder">{mobileNumber || "-----"}</div>
              </div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default PartnersAccordion;
