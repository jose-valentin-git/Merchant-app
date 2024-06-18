import { FC, MutableRefObject, useRef, useState } from "react";
import { usePartnersPublicData } from "../../../../hooks/usePartnerHelper";
import LoadingSpinner from "../../../componentutils/LoadingSpinner";
import { ClinicDTO } from "../../../../model/ClinicDTO";
import { CityDTO } from "../../../../model/CityDTO";

interface AddClinicProps {
  onSave?: (clinicData: ClinicDTO) => void;
  clinicData?: ClinicDTO;
  updateOrAdd?: {
    title: string;
  };
  onCancelForm?: () => void;
  refetch?: () => void;
}
const AddClinic: FC<AddClinicProps> = ({
  onSave,
  clinicData,
  updateOrAdd,
  onCancelForm,
}) => {
  const { data, isLoading } = usePartnersPublicData();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const line1Ref = useRef<HTMLInputElement>(null);
  const line2Ref = useRef<HTMLInputElement>(null);
  const areaRef = useRef<HTMLInputElement>(null);
  const landmarkRef = useRef<HTMLInputElement>(null);
  // const cityRef = useRef<HTMLInputElement>(null);
  const cityRef: MutableRefObject<CityDTO | null> = useRef<CityDTO | null>(
    null
  );
  const pincodeRef = useRef<HTMLInputElement>(null);
  const defaultAddressRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleSubmit = () => {
    // Reset errors
    setErrors({});

    // Validation
    const requiredFields = ["name", "phoneNumber", "area", "line1", "pincode"];
    const newErrors: { [key: string]: string } = {};
    requiredFields.forEach((field) => {
      if (!eval(`${field}Ref.current?.value`)) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });
    // Validate pincode
    const pincode = pincodeRef.current?.value;
    if (pincode && !/^\d+$/.test(pincode)) {
      newErrors["pincode"] = "Pincode must contain only numbers";
    }

    // validate city
    if (!cityRef.current) {
      newErrors["city"] = "City is Required";
    }

    setErrors(newErrors);

    // If there are errors, stop here
    if (Object.keys(newErrors).length > 0) return;

    const clinicObject = {
      ...clinicData,
      isPrimaryClinic: false,
      name: nameRef.current?.value || "",
      active: true, // when clinic is new and editing always true
      address: {
        active: defaultAddressRef.current?.checked || false,
        isDefault: true,
        line1: line1Ref.current?.value || "",
        line2: line2Ref.current?.value || "",
        landmark: landmarkRef.current?.value || "",
        city: cityRef.current?.cityName || "",
        cityId: cityRef.current?.id || 0, // get city id from city list
        pincode: pincodeRef.current?.value || "",
        // lat: 0, // same method as location
        // lng: 0, // same method as location
        area: areaRef.current?.value || "",
        subArea: "", //
        isClinic: true, // this property indicates whether it is clinic or not
        isPartner: false,
        stateCountry: {
          serverId: cityRef.current?.stateCountryId + "", // Get this from city list
        },
      },
      about: descriptionRef.current?.value || "",
      contactNumber: phoneNumberRef.current?.value || "",
    };

    onSave && onSave(clinicObject);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col mt-3">
          <div>
            <div>
              <div className="d-flex">
                <div className="fs-3">{updateOrAdd?.title}</div>
              </div>
              <div className="row"></div>
              <div className="row">
                <div className="col d-flex flex-column">
                  <label htmlFor="name" className="text-gray">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="mt-2 border-0 rounded input-text-bg"
                    name="name"
                    defaultValue={clinicData?.name || ""}
                    ref={nameRef}
                  />
                  {errors["name"] && (
                    <span className="text-danger">{errors["name"]}</span>
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col d-flex flex-column">
                  <label htmlFor="phoneNumber" className="text-gray">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    className="mt-2 border-0 rounded input-text-bg"
                    name="phoneNumber"
                    defaultValue={clinicData?.contactNumber || ""}
                    ref={phoneNumberRef}
                  />
                  {errors["phoneNumber"] && (
                    <span className="text-danger">{errors["phoneNumber"]}</span>
                  )}
                </div>
                <div className="col d-flex flex-column">
                  <label htmlFor="description" className="text-gray">
                    Description
                  </label>
                  <textarea
                    className="mt-2 border-0 rounded input-text-bg"
                    name="description"
                    defaultValue={clinicData?.about || ""}
                    ref={descriptionRef}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <h3>Add Address</h3>
              </div>
              <div className="row mt-3">
                <div className="col d-flex flex-column">
                  <label htmlFor="line1">Line 1 *</label>
                  <input
                    type="text"
                    className="mt-2 border-0 rounded input-text-bg"
                    name="line1"
                    id="line1"
                    defaultValue={clinicData?.address.line1 || ""}
                    ref={line1Ref}
                  />
                  {errors["line1"] && (
                    <span className="text-danger">{errors["line1"]}</span>
                  )}
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex flex-column">
                  <label htmlFor="line2">Line 2</label>
                  <input
                    type="text"
                    className="mt-2 border-0 rounded input-text-bg"
                    name="line2"
                    id="line2"
                    defaultValue={clinicData?.address.line2 || ""}
                    ref={line2Ref}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col d-flex flex-column">
                  <label htmlFor="area">Area *</label>
                  <input
                    type="text"
                    className="mt-2 border-0 rounded input-text-bg"
                    name="area"
                    id="area"
                    defaultValue={clinicData?.address.area || ""}
                    ref={areaRef}
                  />
                  {errors["area"] && (
                    <span className="text-danger">{errors["area"]}</span>
                  )}
                </div>
                <div className="mt-2 col d-flex flex-column">
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    type="text"
                    className="mt-2 border-0 rounded input-text-bg"
                    name="landmark"
                    id="landmark"
                    defaultValue={clinicData?.address.landmark || ""}
                    ref={landmarkRef}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col d-flex flex-column">
                  <label htmlFor="city">City * </label>
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <select
                      className="border-0 p-0 rounded input-text-bg"
                      id="city"
                      onChange={(e) => {
                        const selectedValue = JSON.parse(
                          e.target.value
                        ) as CityDTO;
                        cityRef.current = selectedValue;
                      }}
                    >
                      <option>{clinicData?.address.city}</option>
                      {data?.cityList.map((city, index) => (
                        <option key={index} value={JSON.stringify(city)}>
                          {city.cityName}
                        </option>
                      ))}
                    </select>
                  )}
                  {errors["city"] && (
                    <span className="text-danger">{errors["city"]}</span>
                  )}
                </div>
                <div className="col d-flex flex-column">
                  <label htmlFor="PIN No">PIN Code * </label>
                  <input
                    type="text"
                    className="mt-2 border-0 rounded input-text-bg"
                    name="pincode"
                    id="PIN No"
                    maxLength={6}
                    defaultValue={clinicData?.address.pincode || ""}
                    ref={pincodeRef}
                  />
                  {errors["pincode"] && (
                    <span className="text-danger">{errors["pincode"]}</span>
                  )}
                </div>
              </div>
              <div className="row my-5 ">
                <div className=" d-flex justify-content-evenly">
                  <div className="d-flex align-items-center w-50  justify-content-evenly ">
                    <input
                      type="checkbox"
                      className="border-0 rounded input-text-bg check-box"
                      name="checkbox"
                      id="checkbox"
                      ref={defaultAddressRef}
                      defaultChecked={clinicData?.address.active || false}
                    />
                    <div className="text-center">
                      Default this as delivery address
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col">
                      <button
                        className="btn bg-purple text-white btn-hover"
                        onClick={onCancelForm}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="btn bg-purple text-white btn-hover"
                        onClick={handleSubmit}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClinic;
