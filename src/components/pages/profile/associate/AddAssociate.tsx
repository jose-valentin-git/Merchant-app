import { AxiosError } from "axios";
import React, { FC, useState } from "react";
import ToastUtils from "../../../../utils/ToastUtils";
import { useAddNewAssociate } from "../../../../hooks/useAssociateDataHelper";
interface AddAssociateProps {
  onCancelButton: () => void;
  refetchOnAddingAssociate: () => void;
}
const AddAssociate: FC<AddAssociateProps> = ({
  onCancelButton,
  refetchOnAddingAssociate,
}) => {
  const [associateData, setFormData] = useState({
    firstName: "",
    displayName: "",
    mobileNumber: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    displayName: "",
    mobileNumber: "",
  });
  // validation function
  const validateFirstName = (value: string) => {
    if (!value.trim()) {
      return "First name is required";
    }
    return "";
  };

  const validateDisplayName = (value: string) => {
    if (!value.trim()) {
      return "Display name is required";
    }
    return "";
  };

  const validateMobileNumber = (value: string) => {
    // Regular expression to match Indian mobile numbers
    const indianMobileNumberRegex = /^[6-9]\d{9}$/;

    if (!value.trim()) {
      return "Mobile number is required";
    } else if (!indianMobileNumberRegex.test(value)) {
      return "Please enter a valid mobile number";
    }

    return "";
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...associateData,
      [name]: value,
    });
  };
  const handleOnSaveButton = () => {
    const newErros = {
      firstName: validateFirstName(associateData.firstName),
      displayName: validateDisplayName(associateData.displayName),
      mobileNumber: validateMobileNumber(associateData.mobileNumber),
    };
    setErrors(newErros);
    if (Object.values(newErros).some((error) => error !== "")) {
      return;
    }
    submitData();
  };
  const submitData = async () => {
    try {
      await useAddNewAssociate(associateData);
      ToastUtils.success("Associate Added Successfully");
      onCancelButton();
      refetchOnAddingAssociate();
    } catch (error) {
      const err = error as AxiosError;
      ToastUtils.error(err.message);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="fs-3">Add Associate</div>
          <div className="col">
            <div>
              <div className="row mt-2">
                <div className="col d-flex flex-column">
                  <label htmlFor="firstName">FIRST NAME *</label>
                  <input
                    type="text"
                    name="firstName"
                    className="mt-2 border-0 rounded input-text-bg"
                    placeholder="First Name"
                    onChange={handleInputChange}
                  />
                  {errors.firstName && (
                    <span className="ms-2 text-danger">{errors.firstName}</span>
                  )}
                </div>
              </div>
              <div className="row mt-2">
                <div className="col d-flex flex-column">
                  <label htmlFor="lastName">DISPLAY NAME *</label>
                  <input
                    type="text"
                    name="displayName"
                    className="mt-2 border-0 rounded input-text-bg"
                    placeholder="First Name"
                    onChange={handleInputChange}
                  />
                  {errors.displayName && (
                    <span className="ms-2 text-danger">
                      {errors.displayName}
                    </span>
                  )}
                </div>
              </div>
              <div className="row mt-2">
                <div className="col d-flex flex-column">
                  <label htmlFor="firstName">MOBILE NUMBER *</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    maxLength={10}
                    className="mt-2 border-0 rounded input-text-bg"
                    placeholder="First Name"
                    onChange={handleInputChange}
                  />
                  {errors.mobileNumber && (
                    <span className="ms-2 text-danger">
                      {errors.mobileNumber}
                    </span>
                  )}
                </div>
              </div>
              <div className="row  g-0 my-3 d-flex align-items-center justify-content-center">
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <button
                    className="btn border-0 rounded-1 p-2 bg-purple text-white btn-hover"
                    onClick={onCancelButton}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <button
                    className="btn border-0 rounded-1 p-2  bg-purple text-white btn-hover"
                    onClick={handleOnSaveButton}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAssociate;
