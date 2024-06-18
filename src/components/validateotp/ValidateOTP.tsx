import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../App.css";
import WondrxLogo from "../wondrxlogo/WondrxLogo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAPIClient } from "../../services/ApiClient";
import { API_ENDPOINT } from "../../services/ApiEndPoints";
import ToastUtils from "../../utils/ToastUtils";
import { AxiosError } from "axios";
import AccessDTO from "../../model/AccessDTO";
import ROUTES from "../routes";
import CookieUtils from "../../utils/CookieUtils";
import SessionDetails from "../../model/SessionDetails";
import { getLoginDetails } from "../../services/LoginService";
import sendOTPResponse from "../../model/SendOTPResponse";
const ValidateOTP = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef(Array(6).fill(null));

  // state to maintain the timer time
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [timerExpired, setTimerExpired] = useState(false); // State to track if timer has expired

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          setTimerExpired(true); // Set timerExpired to true when timer reaches 0
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [timerExpired]);

  const handleOnChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // move to next input if current field is filled
    if (value || (index < length - 1 && inputRefs.current[index + 1])) {
      if (index === newOtp.length - 1) {
        return;
      }
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOnKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    // on pressing back space will go to the previous input box
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOnclick = (index: number) => {
    // to bein cursor at the end of digit in the input box when ever clicked inside input box
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  const handleOnclickVerify = () => {
    // if any of the field contains empty string "" then containsAll variable will be false
    const containsAll = otp.every((optdigit) => optdigit !== "");
    if (!containsAll) {
      toast.error("Fill All Fields");
      return;
    }

    const mobileNumber = location.state && location.state;

    if (!mobileNumber) {
      ToastUtils.error("Mobile Number not found");
      return;
    }
    const otpValue = otp.reduce((p, c) => p + c, "");

    callValidateOTP(mobileNumber, otpValue);
  };

  const callValidateOTP = (mobileNumber: string, otp: string) => {
    const VALIDATE_OTP_SCOPE = "read write";
    const GRANT_TYPE = "password";
    const TIME_STAMP = +new Date(); // returns unix time stamp in seconds.

    const validateOtpFormData = new FormData();
    validateOtpFormData.append("username", mobileNumber);
    validateOtpFormData.append("password", otp);
    validateOtpFormData.append("client_id", "doctorapp");
    validateOtpFormData.append(
      "client_secret",
      "139466DDD144C4C862B69B53D512A"
    );
    validateOtpFormData.append("scope", VALIDATE_OTP_SCOPE);
    validateOtpFormData.append("grant_type", GRANT_TYPE);
    validateOtpFormData.append("timestamp", TIME_STAMP.toString());

    getAPIClient()
      .post<AccessDTO>(API_ENDPOINT.verifyOTP, validateOtpFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (res) => {
        console.log(res);
        CookieUtils.setUserDetails({ token: res.data.access_token });
        const loginDetails = await getLoginDetails(mobileNumber);
        if (res.data) {
          const sessionData: SessionDetails = {
            token: res.data.access_token,
            doctorId: loginDetails.doctorId,
            userId: loginDetails.userId,
          };

          CookieUtils.setUserDetails(sessionData);
          navigate(ROUTES.dashboard);
        }
      })
      .catch((e) => {
        const error = e as AxiosError<{ error_description: string }>;
        console.log(error);

        ToastUtils.error(
          error.response?.data?.error_description || "Something went wrong"
        );
      });
  };

  // this method will resend the otp
  const handleResendOTP = () => {
    const mobileNumber = location.state && location.state;
    if (!mobileNumber) {
      ToastUtils.error("Mobile Number not found");
      return;
    }

    getAPIClient()
      .post<sendOTPResponse>(API_ENDPOINT.sendOTP, mobileNumber, {
        headers: {
          "Content-Type": "text/plain",
        },
      })
      .then((res) => {
        ToastUtils.success("OTP Resent");
        setTimer(120); // Reset the timer
        setTimerExpired(false); // Reset timerExpired state
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
        className="vh-100 d-flex  justify-conent-center align-items-center"
        style={gradientStyle}
      >
        <div className=" container d-flex flex-column justify-conent-center align-items-center  p-5  ">
          <WondrxLogo width="12vh" height="12vh" />
          <div
            className="border border-2 d-flex align-items-center flex-wrap justify-content-center flex-column bg-light rounded-3 p-3 mt-3"
            style={{ width: "65%" }}
          >
            <div className="fs-5">
              <p>Enter OTP below recieved on given phone number</p>
            </div>
            <div className="  ">
              <div className="row d-flex align-items-center justify-content-around">
                {otp.map((value, index) => {
                  <div></div>;
                  return (
                    <input
                      key={index}
                      type="text"
                      ref={(input) => (inputRefs.current[index] = input)}
                      value={value}
                      onChange={(event) => {
                        handleOnChange(index, event);
                      }}
                      onKeyDown={(event) => {
                        handleOnKeyDown(index, event);
                      }}
                      onClick={() => handleOnclick(index)}
                      className="text-center col-1 fs-1  border border-dark rounded-2"
                    />
                  );
                })}
              </div>
            </div>
            <div className="row w-100 mt-3">
              <div className=" d-flex align-items-baseline justify-content-between">
                <div>
                  <Link className="text-purple fw-bolder" to={"/login"}>
                    Change phone number
                  </Link>
                </div>
                <div>
                  {timerExpired ? (
                    <button
                      className="btn fs-6 rounded-3 bg-purple btn-hover text-white"
                      onClick={handleResendOTP}
                    >
                      Resend OTP
                    </button>
                  ) : (
                    <button
                      className="btn fs-6 rounded-3 bg-purple btn-hover text-white"
                      onClick={handleOnclickVerify}
                    >
                      Verify
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="row mt-1">
              {!timerExpired && (
                <div
                  className={`timer fw-bolder ${
                    timer <= 15 ? "text-danger" : ""
                  }`}
                >
                  Time remaining:{" "}
                  {Math.floor(timer / 60)
                    .toString()
                    .padStart(2, "0")}
                  :{(timer % 60).toString().padStart(2, "0")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ValidateOTP;
