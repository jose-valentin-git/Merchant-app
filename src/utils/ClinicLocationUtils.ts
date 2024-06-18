import { getClinicLocationDatails } from "../services/LocationService";
import CookieUtils from "./CookieUtils";

class ClinicLocationUtil {
  static markClinic = (lat: number, lng: number) => {
    const doctorId = CookieUtils.getUserDetails()?.doctorId!;

    return getClinicLocationDatails(doctorId, lat, lng);
  };
}

export default ClinicLocationUtil;
