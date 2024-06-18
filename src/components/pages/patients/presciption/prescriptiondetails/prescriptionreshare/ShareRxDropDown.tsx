import { FC, useState } from "react";
import { Dropdown, DropdownButton, DropdownItem } from "react-bootstrap";
import ShareSVG from "../../../../../../assets/ShareSVG";
import ResharePresciptionModal from "./ResharePresciptionModal";
import WhatsAppSVG from "../../../../../../assets/WhatsAppSVG";
import MailSVG from "../../../../../../assets/MailSVG";
import ToastUtils from "../../../../../../utils/ToastUtils";

interface ShareRxDropDownProps {
  patientName?: string;
  mobileNumber?: string;
  ptpId?: string;
  invalidMobileNumber: boolean;
}
const ShareRxDropDown: FC<ShareRxDropDownProps> = ({
  patientName,
  mobileNumber,
  ptpId,
  invalidMobileNumber,
}) => {
  const [showReShareModal, setShowReShareModal] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleDropdownClick = () => {
    if (invalidMobileNumber) {
      ToastUtils.error("Invalid mobile number");
      return;
    }
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <DropdownButton
        drop={"start"}
        variant="none"
        title={
          <ShareSVG
            fillColor={`${invalidMobileNumber ? "#aeaeae" : "#6c5dd3"}`}
          />
        }
        show={dropdownOpen}
        onToggle={handleDropdownClick}
      >
        <Dropdown.Item
          eventKey="1"
          onClick={() => {
            setShowReShareModal(true);
          }}
        >
          with patients
        </Dropdown.Item>
        <ResharePresciptionModal
          patientName={patientName}
          mobileNumber={mobileNumber}
          setShowReShare={setShowReShareModal}
          showReShare={showReShareModal}
          ptpId={ptpId}
        />
        <DropdownButton drop={"start"} variant="none" title="with others">
          <DropdownItem
            as="button"
            onClick={() =>
              window.open(`https://wa.me/${mobileNumber}`, "_blank")
            }
          >
            <div className="row">
              <div className="col">
                <WhatsAppSVG />
              </div>

              <div className="col">whatsApp</div>
            </div>
          </DropdownItem>
          <DropdownItem
            as="button"
            onClick={() => {
              window.location.href = `mailto:vishalkh.wondrx@gmail.com?body=${patientName} Please find the prescription attached for ${patientName}.`;
            }}
          >
            <div className="row">
              <div className="col-4">
                <MailSVG />
              </div>
              <div className="col text-start">Email</div>
            </div>
          </DropdownItem>
        </DropdownButton>
      </DropdownButton>
    </>
  );
};

export default ShareRxDropDown;
