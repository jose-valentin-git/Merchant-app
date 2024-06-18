import { FC, useState } from "react";
import LocationPinned from "../../../../assets/LocationPinned";
import EditSVG from "../../../../assets/EditSVG";
import { ClinicDTO } from "../../../../model/ClinicDTO";
import DeleteSVG from "../../../../assets/DeleteSVG";
import CookieUtils from "../../../../utils/CookieUtils";
import {
  useClinicDelete,
  useEditClinicDetails,
  useMarkClinicAsDefault,
} from "../../../../hooks/useClinicDataHelper";
import ToastUtils from "../../../../utils/ToastUtils";
import { AxiosError } from "axios";
import { Modal } from "react-bootstrap";
import AddClinic from "./AddClinic";
import LocationNotPinned from "../../../../assets/LocationNotPinned";
import clinicLocationStore from "../../../../middleware/clinicLocationStore";
interface ClinicCardProps {
  clinicDataCard?: ClinicDTO;
  refetch: () => void;
  checkClinic: () => boolean;
  isLoading: boolean | true;
}

const ClinicCard: FC<ClinicCardProps> = ({
  clinicDataCard,
  refetch,
  checkClinic,
}) => {
  const { setMarkedClinic } = clinicLocationStore();
  const checkClinicServerId = (clinicServerId?: string) => {
    const serverId = CookieUtils.getMarkedClinic();
    if (serverId === clinicServerId) return "Clinic Marked";
    return "Mark as current";
  };
  const handleOnDeleteButton = async (serverId?: string) => {
    const deleteClinic = checkClinic();
    if (deleteClinic) {
      try {
        await useClinicDelete(serverId);
        refetch();
        ToastUtils.success("Clinic deleted successfully");
      } catch (err) {
        const e = err as AxiosError;
        ToastUtils.error(e.message);
      }
    } else {
      ToastUtils.error("Atleast one clinic should be present");
      return;
    }
  };

  // logic of Edit funtionality
  const [show, setShow] = useState(false);
  const [cliniData, setClinicData] = useState<ClinicDTO>();
  const handleEditClick = (clinicDTO?: ClinicDTO) => {
    if (clinicDTO) {
      setClinicData(clinicDTO);
    }
    setShow(true);
  };

  // This method will close the clinic data input form
  const handleClose = () => {
    setShow(false);
  };

  // This method will save the clinic data on clickin on save
  const handleSave = async (clinicData: ClinicDTO) => {
    try {
      await useEditClinicDetails(clinicData);
      refetch();
      ToastUtils.success("Clinic Updated Succesfully");
    } catch (e) {
      const err = e as AxiosError;
      ToastUtils.error(err.message);
    }
    handleClose();
  };

  //This method will mark a clinic as current
  const handleOnMarkAsCurrent = async () => {
    if (!clinicDataCard) return;
    try {
      await useMarkClinicAsDefault(clinicDataCard?.serverId);
      ToastUtils.success("Marked As Current");
      refetch();
      setMarkedClinic(clinicDataCard);
    } catch (error) {
      const err = error as AxiosError;
      ToastUtils.error(err.message);
    }
  };

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="border rounded-3 row  d-flex align-items-around">
          <div className="col">
            <div className="p-4 d-flex align-items-center justify-content-between">
              {clinicDataCard?.isPrimaryClinic ? (
                <div className="col">
                  <LocationPinned />
                </div>
              ) : (
                <div className="col">
                  <LocationNotPinned />
                </div>
              )}
              <div className="col">
                <div className="text-purple">{clinicDataCard?.name}</div>
                <div className="">{clinicDataCard?.address.city}</div>
              </div>
              <div className="col">
                <button
                  className="btn border"
                  onClick={() => handleOnMarkAsCurrent()}
                >
                  {checkClinicServerId(clinicDataCard?.serverId)}
                </button>
              </div>
              <div
                className="col-2 btn d-flex align-items-end justify-content-around "
                onClick={() => handleEditClick(clinicDataCard)}
              >
                <EditSVG />
              </div>
              <div
                className="col-1 btn"
                onClick={() => handleOnDeleteButton(clinicDataCard?.serverId)}
              >
                <DeleteSVG />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        animation={false}
        backdrop="static" // Prevents closing when clicked outside
        keyboard={false} // Prevents closing when the escape key is pressed
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <AddClinic
            clinicData={cliniData}
            onSave={handleSave}
            updateOrAdd={{ title: "Update Clinic Details" }}
            refetch={refetch}
            onCancelForm={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ClinicCard;
