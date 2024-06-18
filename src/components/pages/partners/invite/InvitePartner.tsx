import { FC, MutableRefObject, useRef, useState } from "react";
import InvitePartnerSVG from "../../../../assets/InvitePartnerSVG";
import {
  InviteFormData,
  InviteFormErrors,
} from "../../../../abstraction/UI/interface";
import {
  invitePartner,
  usePartnersPublicData,
} from "../../../../hooks/usePartnerHelper";
import { PartnerTypeDTO } from "../../../../model/PartnerTypeDTO";
import ToastUtils from "../../../../utils/ToastUtils";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const InvitePartner: FC = () => {
  const navigate = useNavigate();
  const { data } = usePartnersPublicData();
  const partnersList = data?.partnerTypeList;

  const nameRef = useRef<HTMLInputElement>(null);
  const mobileNoRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const selectDropDownRef: MutableRefObject<number | null> = useRef<
    number | null
  >(null);

  const [errors, setErrors] = useState<InviteFormErrors>({
    dropDownValue: "",
    name: "",
    mobileNo: "",
    email: "",
  });

  const handleSubmit = async () => {
    let valid = true;
    const newErrors: InviteFormErrors = {
      dropDownValue: "",
      name: "",
      mobileNo: "",
      email: "",
    };
    if (!selectDropDownRef.current) {
      newErrors.dropDownValue = "please select Partner";
      valid = false;
    }
    if (!nameRef.current?.value.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!mobileNoRef.current?.value.trim()) {
      newErrors.mobileNo = "Mobile No is required";
      valid = false;
    } else if (!/^[789]\d{9}$/.test(mobileNoRef.current?.value.trim())) {
      newErrors.mobileNo = "Invalid  mobile number";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      const formData: InviteFormData = {
        partnerTypeId: selectDropDownRef.current,
        name: nameRef.current!.value,
        mobileNumber: mobileNoRef.current!.value,
        email: emailRef.current!.value,
      };

      try {
        const data = await invitePartner(formData);
        ToastUtils.success(data);
        navigate("/partners");
      } catch (e) {
        const err = e as AxiosError;
        ToastUtils.error(err.message);
      }
    }
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="row mt-3">
            <div className="col-3 border-end border-3  d-flex align-items-center justify-content-center">
              <div>
                <InvitePartnerSVG />
              </div>
            </div>
            <div className="col">
              <div className="row d-flex align-items-center justify-cotent-center">
                <div className="col">
                  <div className="row g-0">
                    <select
                      className="border-0 p-2 rounded-2"
                      name=""
                      id=""
                      style={{ backgroundColor: "#6c5dd3" }}
                      onChange={(e) => {
                        const selectedValue = JSON.parse(
                          e.target.value
                        ) as PartnerTypeDTO;
                        selectDropDownRef.current = selectedValue.id;
                      }}
                    >
                      <option
                        style={{ backgroundColor: "white" }}
                        value={undefined}
                      >
                        Select A Partner
                      </option>
                      {partnersList?.map((value, index) => {
                        return (
                          <option
                            style={{ backgroundColor: "white" }}
                            value={JSON.stringify(value)}
                            label={value.displayName}
                            key={index}
                          >
                            {value.displayName}
                          </option>
                        );
                      })}
                    </select>
                    {errors.dropDownValue && (
                      <div className="text-red">{errors.dropDownValue}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div>
                  <div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        ref={nameRef}
                      />
                      {errors.name && (
                        <div className="text-red">{errors.name}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Mobile No *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        maxLength={10}
                        ref={mobileNoRef}
                      />
                      {errors.mobileNo && (
                        <div className="text-red">{errors.mobileNo}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                        ref={emailRef}
                        required
                      />
                      {errors.email && (
                        <div className="text-red">{errors.email}</div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn bg-purple btn-hover text-white"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvitePartner;
