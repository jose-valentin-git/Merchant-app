import React, { FC, useEffect, useState } from "react";
import EditSVG from "../../../../assets/EditSVG";
import doctorProfileStore from "../../../../middleware/doctorProfileStore";
import { usePartnersPublicData } from "../../../../hooks/usePartnerHelper";
import DoctorDTO from "../../../../model/DoctorDTO";
import { useDoctorEditProfileDetails } from "../../../../hooks/useDoctorProfileDataHelper";
import ToastUtils from "../../../../utils/ToastUtils";
import { AxiosError } from "axios";
import SpecialityDTO from "../../../../model/SpecialityDTO";

const Personal: FC = () => {
  const { data } = usePartnersPublicData();

  const [editable, setEditable] = useState<boolean>(false);

  const { doctorData } = doctorProfileStore();

  const [doctorDisplayData, setDoctorDisplayData] = useState<
    DoctorDTO | undefined | null
  >(null);

  useEffect(() => {
    setDoctorDisplayData(doctorData);
  }, [doctorData]);

  const onFormCancel = () => {
    setEditable(!editable);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDoctorDisplayData((prevDoctorDisplayData) => {
      if (!prevDoctorDisplayData) return null; // Handle case when prevDoctorDisplayData is null or undefined
      return {
        ...prevDoctorDisplayData,
        [name]: value,
      };
    });
  };

  const handleUpdateDoctorGender = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setDoctorDisplayData((prevDoctorData) => {
      // if (!prevDoctorData?.gender) return null;
      return {
        ...prevDoctorData!,
        gender: { serverId: value },
      };
    });
  };

  const handleUpdateDoctorSpecialty = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    const specialityJsonObject = JSON.parse(value) as SpecialityDTO;
    setDoctorDisplayData((prevDoctorData) => {
      return {
        ...prevDoctorData!,
        speciality: {
          ...specialityJsonObject,
          serverId: specialityJsonObject.id + "",
        },
      };
    });
  };

  const handleDateOfBirthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const birthDate = value.split("-");

    setDoctorDisplayData((prevDoctorData) => {
      if (!prevDoctorData) return null;
      return {
        ...prevDoctorData,
        dateOfBirth: {
          ...prevDoctorData.dateOfBirth,
          date: Number(birthDate[2]),
          month: Number(birthDate[1]),
          year: Number(birthDate[0]),
        },
      };
    });
  };

  const handleSaveEditedDoctorDate = async () => {
    if (!doctorDisplayData) return;
    try {
      await useDoctorEditProfileDetails(doctorDisplayData);
      ToastUtils.success("Profile Updated Success fully");
      setEditable(!editable);
    } catch (error) {
      const err = error as AxiosError;
      ToastUtils.error(err.message);
    }
  };

  if (!!!doctorDisplayData) return;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className={`${editable && "invisible"}`}>
              <div
                className={`row d-flex align-items-center justify-content-end `}
              >
                <div className="col-md-2 col-xxl-1">
                  <div
                    className={`btn bg-white border  d-flex justify-content-between`}
                    onClick={() => {
                      setEditable(!editable);
                    }}
                  >
                    <div className="fs-5 text-purple">Edit</div>
                    <EditSVG />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row g-0">
                <div className="col d-flex flex-column ">
                  <label className="text-gray">Add Registration Number</label>
                  <input
                    type="text"
                    defaultValue={doctorDisplayData?.licenseNumber}
                    name="licenseNumber"
                    className={
                      editable
                        ? `border-1 rounded input-text-bg`
                        : `border-0 rounded input-text-bg`
                    }
                    placeholder="License Number"
                    readOnly={!editable}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col d-flex flex-column">
                  <label className="text-gray">FIRST NAME *</label>
                  <input
                    type="text"
                    defaultValue={doctorDisplayData?.firstName}
                    name="firstName"
                    className={
                      editable
                        ? `border-1 rounded input-text-bg`
                        : `border-0 rounded input-text-bg`
                    }
                    placeholder="First Name"
                    readOnly={!editable}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col d-flex flex-column">
                  <label className="text-gray">LAST NAME *</label>
                  <input
                    type="text"
                    defaultValue={doctorDisplayData?.lastName}
                    name="lastName"
                    className={
                      editable
                        ? `border-1 rounded input-text-bg`
                        : `border-0 rounded input-text-bg`
                    }
                    placeholder="Last Name"
                    readOnly={!editable}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-4">
                {!editable ? (
                  <div className="col d-flex flex-column">
                    <label className="text-gray">GENDER *</label>
                    <input
                      type="text"
                      defaultValue={doctorDisplayData?.gender?.value || ""}
                      className={
                        editable
                          ? `border-1 rounded input-text-bg p-0`
                          : `border-0 rounded input-text-bg`
                      }
                      placeholder="Gender"
                      readOnly
                    />
                  </div>
                ) : (
                  <div className="col d-flex flex-column">
                    <label className="text-gray">GENDER *</label>
                    <select
                      className="border-1 rounded input-text-bg p-0"
                      onChange={handleUpdateDoctorGender}
                    >
                      <option value="1">MALE</option>
                      <option value="2">FEMALE</option>
                      <option value="3">OTHER</option>
                    </select>
                  </div>
                )}
                {!editable ? (
                  <div className="col d-flex flex-column">
                    <label className="text-gray">DATE OF BIRTH *</label>
                    <input
                      type="text"
                      defaultValue={
                        `${doctorDisplayData?.dateOfBirth?.date || "--"}-${
                          doctorDisplayData?.dateOfBirth?.month || "--"
                        }-${doctorDisplayData?.dateOfBirth?.year || "--"}` || ""
                      }
                      className={
                        editable
                          ? `border-1 rounded input-text-bg`
                          : `border-0 rounded input-text-bg`
                      }
                      name="dateOfBirth"
                      placeholder="Date Of Birth"
                    />
                  </div>
                ) : (
                  <div className="col d-flex flex-column">
                    <label className="text-gray">DATE OF BIRTH *</label>
                    <input
                      type="date"
                      defaultValue={`${doctorDisplayData?.dateOfBirth?.year}-${doctorDisplayData?.dateOfBirth?.month}-${doctorDisplayData?.dateOfBirth?.date}`}
                      className={`border-1 rounded input-text-bg`}
                      placeholder="Date of Birth"
                      onChange={handleDateOfBirthChange}
                    />
                  </div>
                )}
              </div>
              <div className="row mt-4">
                <div className="col d-flex flex-column">
                  <label className="text-gray">DEGREE *</label>
                  <input
                    type="text"
                    defaultValue={doctorDisplayData?.degree}
                    className={
                      editable
                        ? `border-1 rounded input-text-bg`
                        : `border-0 rounded input-text-bg`
                    }
                    name="degree"
                    placeholder="Degree"
                    readOnly={!editable}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-4">
                {!editable && (
                  <div className="col d-flex flex-column">
                    <label className="text-gray">SPECIALITY *</label>
                    <input
                      type="text"
                      defaultValue={doctorDisplayData?.speciality?.name}
                      className={
                        editable
                          ? `border-1 rounded input-text-bg`
                          : `border-0 rounded input-text-bg`
                      }
                      placeholder="uwhfhfiwflk"
                      readOnly
                    />
                  </div>
                )}
                {editable && (
                  <div className="col d-flex flex-column">
                    <label className="text-gray">SPECIALITY *</label>
                    <select
                      className={
                        editable
                          ? `border-1 rounded input-text-bg p-0`
                          : `border-0 rounded input-text-bg`
                      }
                      onChange={handleUpdateDoctorSpecialty}
                    >
                      <option defaultValue={doctorDisplayData?.speciality.name}>
                        {doctorDisplayData?.speciality.name}
                      </option>
                      {data?.specialityList?.map((speciality, index) => (
                        <option
                          key={index}
                          defaultValue={JSON.stringify(speciality)}
                        >
                          {speciality.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="col d-flex flex-column">
                  <label className="text-gray">PRIMARY PHONE NO *</label>
                  <input
                    type="number"
                    name="mobileNumber"
                    defaultValue={doctorDisplayData?.mobileNumber}
                    className={`border-0 rounded input-text-bg`}
                    placeholder="Primary Number"
                    readOnly
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col d-flex flex-column">
                  <label className="text-gray">PRACTING SINCE *</label>
                  <input
                    type="text"
                    defaultValue={doctorDisplayData?.practiceStartedOn}
                    className={
                      editable
                        ? `border-1 rounded input-text-bg`
                        : `border-0 rounded input-text-bg`
                    }
                    name="practiceStartedOn"
                    maxLength={4}
                    placeholder="Practisig Since"
                    readOnly={!editable}
                    onChange={handleChange}
                  />
                </div>
                <div className="col d-flex flex-column">
                  <label className="text-gray">SECONDRY EMAIL *</label>
                  <input
                    type="text"
                    defaultValue={doctorDisplayData?.secondaryEmail}
                    className={
                      editable
                        ? `border-1 rounded input-text-bg`
                        : `border-0 rounded input-text-bg`
                    }
                    name="secondaryEmail"
                    placeholder="Secondry No"
                    readOnly={!editable}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-4 mb-5">
                <div className="col d-flex flex-column">
                  <label className="text-gray">ALTERNATE PHONE NO *</label>
                  <input
                    type="text"
                    defaultValue={doctorDisplayData?.alternatePhone}
                    className={
                      editable
                        ? `border-1 rounded input-text-bg`
                        : `border-0 rounded input-text-bg`
                    }
                    name="alternatePhone"
                    placeholder="Alternate Phone No"
                    readOnly={!editable}
                    onChange={handleChange}
                  />
                </div>
                <div className="col d-flex flex-column">
                  <label className="text-gray">ALTERNATE LANDLINE NO *</label>
                  <input
                    type="text"
                    defaultValue={doctorDisplayData?.landLine}
                    className={
                      editable
                        ? `border-1 rounded input-text-bg`
                        : `border-0 rounded input-text-bg`
                    }
                    name="landLine"
                    placeholder="Alternate Landline No"
                    readOnly={!editable}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {editable && (
                <div className="row mb-5">
                  <div className="col">
                    <div className="col d-flex align-items-baseline justify-content-around">
                      <p className="text-purple fw-bolder">
                        Save edited information
                      </p>
                      <button
                        className="btn border btn-border "
                        onClick={() => onFormCancel()}
                      >
                        Cancel
                      </button>
                      <button
                        className="border-0 rounded-1 p-2 border btn-border bg-purple text-white"
                        onClick={() => handleSaveEditedDoctorDate()}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
