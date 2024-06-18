import { FC } from "react";
interface EditPersonalInformationProps {
  onFormCancel: () => void;
  saveEditedDoctorData: () => void;
}
const EditPersonalInformation: FC<EditPersonalInformationProps> = ({
  onFormCancel,
  saveEditedDoctorData,
}) => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col d-flex align-items-baseline justify-content-around">
            <p className="text-purple fw-bolder">
              Edit your personal information
            </p>
            <button className="btn border btn-border " onClick={onFormCancel}>
              Cancel
            </button>
            <button
              className="border-0 rounded-1 p-2 border btn-border bg-purple text-white"
              onClick={saveEditedDoctorData}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPersonalInformation;
