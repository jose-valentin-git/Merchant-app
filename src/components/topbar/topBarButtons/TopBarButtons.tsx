import { Link } from "react-router-dom";
import RxPrescriptionSVG from "../../../assets/topbaricons/RxPrescriptionSVG";
import LocationButton from "./LocationButton";
import InternetSpeedOverlay from "./internetspeed/InternetSpeedOverlay";
import BluetoothButton from "../../Pen/PenBluetoothButton";
const TopBarButtons = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row w-100 ">
          <div className="col d-flex g-0">
            <div className="col d-flex align-items-center justify-content-center">
              <Link to={"/rx"}>
                <button
                  type="button"
                  className="btn position-relative "
                  style={{ backgroundColor: "#ff9695" }}
                >
                  <RxPrescriptionSVG />
                  <span
                    className="text-dark position-absolute top-0  start-50 translate-middle badge rounded-pill border border-danger"
                    style={{ backgroundColor: "#ff9695" }}
                  ></span>
                </button>
              </Link>
            </div>
            <div className="col">
              <BluetoothButton />
            </div>
            <div className="col">
              <LocationButton />
            </div>
            <div className="col">
              <InternetSpeedOverlay />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBarButtons;
