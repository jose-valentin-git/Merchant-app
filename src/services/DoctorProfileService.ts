import DoctorDTO from "../model/DoctorDTO";
import CookieUtils from "../utils/CookieUtils";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";

const getDoctorProfileDetails = (doctorId: string): Promise<DoctorDTO> => {
  return new Promise<DoctorDTO>((resolve, reject) => {
    if (!doctorId) return;
    console.log(`Hiting API ${API_ENDPOINT.doctorDetails}`);
    getAPIClient()
      .get<DoctorDTO>(`${API_ENDPOINT.doctorDetails}/${doctorId}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

const editDoctorProfileDetails = (doctorDTO: DoctorDTO): Promise<DoctorDTO> => {
  return new Promise<DoctorDTO>((resolve, reject) => {
    if (!doctorDTO) return;
    console.log(`Hiting API ${API_ENDPOINT.doctorDetails}`);
    getAPIClient()
      .put<DoctorDTO>(`${API_ENDPOINT.doctorDetails}`, doctorDTO)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

const removeDoctorProfile = (): Promise<void> => {
  const doctorId: string | undefined = CookieUtils.getUserDetails()?.doctorId;
  return new Promise<void>((resolve, reject) => {
    getAPIClient()
      .post<void>(`${API_ENDPOINT.removeProfilePicture}`, null, {
        params: {
          doctorId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

const uploadProfileProfileImage = (imageDate: FormData): Promise<void> => {
  const doctorId: string | undefined = CookieUtils.getUserDetails()?.doctorId;
  return new Promise<void>((resolve, reject) => {
    getAPIClient()
      .post<void>(`${API_ENDPOINT.uploadProfilePicture}`, imageDate, {
        params: {
          doctorId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((rej) => {
        reject(rej);
      });
  });
};
export {
  getDoctorProfileDetails,
  editDoctorProfileDetails,
  removeDoctorProfile,
  uploadProfileProfileImage,
};
