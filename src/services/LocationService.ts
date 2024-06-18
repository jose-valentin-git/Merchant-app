import { ClinicDTO } from "../model/ClinicDTO";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";

const getClinicLocationDatails = (
  doctorId: string,
  lat: number | null,
  lng: number | null
): Promise<ClinicDTO> => {
  return new Promise<ClinicDTO>((resolve, reject) => {
    if (!doctorId) return;
    console.log(`Hiting API ${API_ENDPOINT.clinicBasedOnLocation}`);
    getAPIClient()
      .get<ClinicDTO>(`${API_ENDPOINT.clinicBasedOnLocation}`, {
        params: {
          doctorId: doctorId,
          lat: lat,
          lng: lng,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};
export { getClinicLocationDatails };
