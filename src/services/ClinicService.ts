import { ClinicDTO } from "../model/ClinicDTO";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";
// This method will get the data of all clinics to display clinic list
const getClinicList = (doctorId: string): Promise<ClinicDTO[]> => {
  return new Promise<ClinicDTO[]>((resolve, reject) => {
    if (!doctorId) return;
    console.log(`Hiting API ${API_ENDPOINT.clinicList}`);
    getAPIClient()
      .get<ClinicDTO[]>(`${API_ENDPOINT.clinicList}`, {
        params: {
          doctorId: doctorId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

// This method will Edit the clinic data
const updateClinic = (clinicDTO: ClinicDTO): Promise<ClinicDTO> => {
  return new Promise<ClinicDTO>((resolve, reject) => {
    if (!clinicDTO) return;
    console.log(`Hiting API ${API_ENDPOINT.editClinicDetails}`);
    getAPIClient()
      .put<ClinicDTO>(`${API_ENDPOINT.editClinicDetails}`, clinicDTO)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

//This method will add a new clinic
const addNewClinic = (clinicDTO: ClinicDTO): Promise<ClinicDTO> => {
  return new Promise<ClinicDTO>((resolve, reject) => {
    if (!clinicDTO) return;
    console.log(`${API_ENDPOINT.addNewClinic}`);
    getAPIClient()
      .post<ClinicDTO>(`${API_ENDPOINT.addNewClinic}`, clinicDTO)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

// This method will delete the clinic
const deleteClinic = (clinicServerId: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (!clinicServerId) return;
    console.log(`Hiting API ${API_ENDPOINT.deleteClinic}`);
    getAPIClient()
      .put<string>(`${API_ENDPOINT.deleteClinic}`, null, {
        params: {
          clinicId: clinicServerId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

// This method will mark Clinic as current
const markClinisAsCurrent = (clinicId: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (!clinicId) return;
    console.log(`Hiting API ${API_ENDPOINT.markAsCurrent}`);
    getAPIClient()
      .put<string>(`${API_ENDPOINT.markAsCurrent}`, null, {
        params: { clinicId },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

const getCLinicDetails = (clinicId: string) => {
  return new Promise<ClinicDTO>((resolve, reject) => {
    getAPIClient()
      .get<ClinicDTO>(`${API_ENDPOINT.clinicDetails}/${clinicId}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => reject(e));
  });
};

export {
  getClinicList,
  deleteClinic,
  updateClinic,
  addNewClinic,
  markClinisAsCurrent,
  getCLinicDetails,
};
