import { FC } from "react";
import PhoneSVG from "../../../assets/PhoneSVG";
import CopySVG from "../../../assets/CopySVG";
import mailImage from "../../../assets/mail.png";

const ContactUs: FC = () => {
  return (
    <div className="container-fluid">
      <div>
        <div className="row">
          <div className="row mt-3">
            <div className="col">
              <div className="shadow-sm p-3 rounded">
                <p>Customer Care</p>
                <hr />
                <div className="row d-flex align-items-center justify-content-end">
                  <div className="col  d-flex align-item-center">
                    <PhoneSVG />
                    <p className="fs-4 ms-3">8454801234</p>
                  </div>
                  <div className="col  d-flex align-self-baseline justify-content-end ">
                    <button className="btn">
                      <CopySVG />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="shadow-sm p-3 rounded">
                <p>Email ID</p>
                <hr />
                <div className="row d-flex align-items-center justify-content-end">
                  <div className="col  d-flex align-item-center">
                    <img src={mailImage} width={40} height={45} alt="" />
                    <p className="fs-4 ms-3">care@wondrx.com</p>
                  </div>
                  <div className="col  d-flex align-self-baseline justify-content-end ">
                    <button className="btn">
                      <CopySVG />
                    </button>
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

export default ContactUs;
