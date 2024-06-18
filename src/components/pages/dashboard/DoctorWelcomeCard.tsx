import { FC, useState } from "react";
import doctorDashboard from "../../../assets/doctorsDashboard.png";
import { CloseButton } from "react-bootstrap";
import CloseDoctorWelomeCardModal from "./CloseDoctorWelomeCardModal";
import CookieUtils from "../../../utils/CookieUtils";
interface DoctorWelcomeCardProps {
  show: boolean;
}
export const DoctorWelcomeCard: FC<DoctorWelcomeCardProps> = () => {
  const [closePermit, setClosePermit] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean | undefined>(
    CookieUtils.getDashboardBanner()
  );

  if (visible !== undefined && !visible) {
    return null;
  }
  return (
    <div className={`border text-purple rounded rounded-3 bg-palepurple g-0`}>
      <div className="row d-flex align-items-center justify-content-end">
        <div className="d-flex justify-content-end px-3">
          <CloseButton
            onClick={() => {
              setClosePermit(true);
            }}
          />
          <CloseDoctorWelomeCardModal
            setShowCloseModal={setClosePermit}
            showCloseModal={closePermit}
            setVisible={setVisible}
          />
        </div>
      </div>
      <div className="d-flex position-relative">
        <svg
          width={547}
          height={187}
          viewBox="0 0 547 187"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M257.412 129.55C460.543 168.298 535.109 221.711 547 243.574C535.808 250.301 511.326 263.755 502.932 263.755C492.44 263.755 337.154 277.882 288.889 281.918C240.625 285.955 152.489 291 127.308 291C107.162 291 -44.7662 272.837 -118.212 263.755L-135 199.175V34.6979L-126.606 -43H-69.9477C-45.4656 -1.6284 54.2812 90.8018 257.412 129.55Z"
            fill="#6C5DD3"
          />
        </svg>
        <img
          className=" position-absolute top-0 start-0"
          src={doctorDashboard}
          alt=""
        />
        <div className="d-flex align-items-center flex-column justify-content-center">
          <h3>Speak to your WONDRx representative </h3>
          <h3>to know more about Group Practice Platform</h3>
        </div>
      </div>
    </div>
  );
};
