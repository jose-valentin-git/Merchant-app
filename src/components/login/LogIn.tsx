import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import WondrxLogo from "../wondrxlogo/WondrxLogo";
import { getAPIClient } from "../../services/ApiClient";
import { API_ENDPOINT } from "../../services/ApiEndPoints";
import sendOTPResponse from "../../model/SendOTPResponse";
import ToastUtils from "../../utils/ToastUtils";
import ROUTES from "../routes";
const LogIn = () => {
  const [termsAndCondition, setTermsAndCondition] = useState<boolean>(false);
  const mobileNumberTFRef = useRef<HTMLInputElement>(null);
  const termsAndConditionCBRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const mobileRegex: RegExp = /^[6-9]{1}[0-9]{9}$/;
    const mobileNumber = mobileNumberTFRef.current?.value;
    console.log("mobileNumber", mobileNumber);

    if (mobileNumberTFRef.current) {
      if (!mobileNumber) {
        mobileNumberTFRef.current.classList.add("is-invalid");
        toast.error("Enter Mobile Number");
        return;
      } else if (mobileNumber === "" || !mobileRegex.test(mobileNumber)) {
        mobileNumberTFRef.current.classList.add("is-invalid");
        toast.error("Enter Valid Mobile Number");
        return;
      } else {
        mobileNumberTFRef.current.classList.remove("is-invalid");
      }
    }

    if (!termsAndCondition) {
      termsAndConditionCBRef.current?.classList.add("is-invalid");
      toast.error("Check Terms And Conditions");
      return;
    } else {
      termsAndConditionCBRef.current?.classList.remove("is-invalid");
    }

    sendOTP(mobileNumber!);
  };

  const sendOTP = (mobileNumber: string) => {
    console.log("mobileNumber", mobileNumber);

    getAPIClient()
      .post<sendOTPResponse>(API_ENDPOINT.sendOTP, mobileNumber, {
        headers: {
          "Content-Type": "text/plain",
        },
      })
      .then((res) => {
        console.log(res);

        if (res.data?.status.toLowerCase() === "success") {
          navigate(ROUTES.otp, { state: mobileNumber });
        } else {
          ToastUtils.error(res.data.message);
        }
      })
      .catch((err) => {
        const error = err as Error;
        ToastUtils.error(error.message);
      });
  };

  // // background style for gradient
  const gradientStyle = {
    background: "linear-gradient(135deg, #B2FFFF 12%, #FFFFFF 59%)",
  };

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center vh-100 "
        style={gradientStyle}
      >
        <div className="row ">
          <div className="col d-flex align-items-center justify-content-center">
            <WondrxLogo width="20vh" height="20vh" />
          </div>
        </div>
        <div
          className="center-div mt-2 bg-light  rounded-1 p-4 d-flex flex-wrap align-items-center justify-conent-center flex-column border border-2 border-end border-bottom rounded-4"
          style={{ width: "30%" }}
        >
          <div className="row mx-auto">
            <h1>Welcome</h1>
          </div>
          <div className="row">
            <div>Enter Your Phone Number</div>
          </div>
          <div className="row align-items-center justify-content-center ">
            <div
              onSubmit={handleSubmit}
              className="row d-flex flex-wrap flex-column align-items-center justify-content-center"
            >
              <input
                id="mobileNumberTF"
                type="text"
                name="mobileNumber"
                ref={mobileNumberTFRef}
                className="form-control m-2"
                placeholder="Enter Your Phone Number"
                required
                maxLength={10}
                style={{ height: "7vh" }}
              />
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <input
                    name="termsAndConditionsAccepted"
                    type="checkbox"
                    className="form-check-input  border-dark"
                    ref={termsAndConditionCBRef}
                    onChange={(event) =>
                      setTermsAndCondition(event.target.checked)
                    }
                    style={{ width: "5vh", height: "5vh" }}
                  />
                </div>

                <div className="">
                  <div className="ms-2 mt-2">
                    Before you continue,you must accept WONDRx {"   "}
                    <a href="#">Terms and Conditions</a>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="mt-3 border-0 rounded-3 p-1 bg-darkgray  text-white fs-5 fw-bolder"
                type="submit"
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LogIn;
