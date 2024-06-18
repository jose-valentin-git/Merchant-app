import { useQuery } from "@tanstack/react-query";
import {
  editDoctorProfileDetails,
  getDoctorProfileDetails,
} from "../services/DoctorProfileService";
import ms from "ms";
import CookieUtils from "../utils/CookieUtils";
import doctorProfileStore from "../middleware/doctorProfileStore";
import DoctorDTO from "../model/DoctorDTO";

const useDoctorProfileDetails = () => {
  const setDoctorProfileData = doctorProfileStore(
    (store) => store.setDoctorProfileData
  );

  const userDetails = CookieUtils.getUserDetails();
  return useQuery({
    queryKey: ["doctorDetails", userDetails?.doctorId],
    queryFn: async () => {
      if (!userDetails?.doctorId) return null;

      const dto = await getDoctorProfileDetails(userDetails.doctorId);
      setDoctorProfileData(dto);
      return dto;
    },
    staleTime: ms("15m"),
  });
};
const useDoctorEditProfileDetails = (doctorDTO: DoctorDTO) => {
  if (!doctorDTO) return null;
  return editDoctorProfileDetails(doctorDTO);
};
export { useDoctorProfileDetails, useDoctorEditProfileDetails };
