import { FC } from "react";
import { AssociateDTO } from "../../../../model/AssociateDTO";
import { AxiosError } from "axios";
import ToastUtils from "../../../../utils/ToastUtils";
import {
  useAddNewAssociate,
  useDeLikAssociate,
} from "../../../../hooks/useAssociateDataHelper";
import { AddAssociateDTO } from "../../../../model/AddAssociateDTO";

interface AssociateCardProps {
  associateDetails: AssociateDTO;
  refetch: () => void;
}

const AssociateCard: FC<AssociateCardProps> = ({
  associateDetails,
  refetch,
}) => {
  const handleOnClickDeActivateButton = async () => {
    try {
      const serverId = associateDetails.serverId;
      await useDeLikAssociate(serverId);
      refetch();
      ToastUtils.success("Associate De-Activated Successfully");
    } catch (error) {
      const err = error as AxiosError;
      ToastUtils.error(err.message);
    }
  };

  const activeAssociate = async () => {
    try {
      const obj: AddAssociateDTO = {
        displayName: associateDetails.displayName,
        firstName: associateDetails.firstName,
        mobileNumber: associateDetails.mobileNumber,
      };
      await useAddNewAssociate(obj);
      refetch();
      ToastUtils.success("Associate Re-Activated Successfully");
    } catch (e) {
      const err = e as AxiosError;
      ToastUtils.error(err.message);
    }
  };

  const active = associateDetails?.active;

  return (
    <div className="container-fluid mt-2">
      <div className="row bg-palepurple p-2 rounded-3">
        <div className="col d-flex align-items-center justify-content-start">
          {associateDetails.displayName}
        </div>
        <div className="col d-flex align-items-center justify-content-start">
          {associateDetails.mobileNumber}
        </div>
        <div className="col d-flex justify-content-center">
          <div
            className={`${
              associateDetails?.active ? "text-success" : "text-danger"
            } d-flex align-items-center fw-bolder justify-content-center`}
          >
            {associateDetails?.active ? "Active" : "In-Active"}
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            <button
              className={`btn bg-purple btn-hover  text-white `}
              onClick={() =>
                active ? handleOnClickDeActivateButton() : activeAssociate()
              }
            >
              {active ? "De-Activate" : "Re-Activate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociateCard;
