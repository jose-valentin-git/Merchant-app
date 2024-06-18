import { FC } from "react";
import { Modal } from "react-bootstrap";
import { LeadSharedDTO } from "../../../../../../model/LeadSharedDTO";
import DateUtils from "../../../../../../utils/formatDate";
interface LeadSharedModalProps {
  prescriptionLeadSharedList: LeadSharedDTO[] | null | undefined;
  setShowLeadSharedModal: (showLeadSharedModal: boolean) => void;
  showLeadSharedModal: boolean | false;
}
const LeadSharedModal: FC<LeadSharedModalProps> = ({
  prescriptionLeadSharedList,
  setShowLeadSharedModal,
  showLeadSharedModal,
}) => {
  return (
    <Modal
      size="lg"
      centered
      show={showLeadSharedModal}
      onHide={() => {
        setShowLeadSharedModal(false);
      }}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Lead shared</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex mt-3 justify-content-center">
          <div className=" d-flex flex-wrap">
            {prescriptionLeadSharedList?.map((leadShared, index) => (
              <div key={index} className="shadow-sm border rounded m-1">
                <div className="container-fluid m-2">
                  <div className="row">
                    <div className="col-3 ">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={leadShared.icon}
                          alt=""
                          style={{
                            width: "50%",
                          }}
                        />
                      </div>

                      <div className="text-center fw-bolder">
                        {leadShared.partnerType}
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <div>Partner</div>
                          <div className="fw-bolder">
                            {leadShared.partnerName}
                          </div>
                        </div>
                        <div className="col text-center">
                          <div>Current Status</div>
                          <div
                            className={`fw-bolder ${
                              leadShared.status === "EXPIRED"
                                ? "text-red"
                                : leadShared.status === "ACCEPTED"
                                ? "text-green"
                                : ""
                            }`}
                          >
                            {leadShared.status}
                          </div>
                        </div>
                        <div className="col text-center">
                          {leadShared.status === "EXPIRED" && (
                            <>
                              <div>Expired On</div>
                              <div className="fw-bolder">
                                {DateUtils.formatDisplayDate(
                                  leadShared.expiredOn
                                )}
                              </div>
                            </>
                          )}
                        </div>
                        <div>
                          <hr />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div>Compnay</div>
                          <div className="fw-bolder">
                            {leadShared.companyName}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LeadSharedModal;
