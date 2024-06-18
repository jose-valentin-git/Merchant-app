import { AxiosError } from "axios";
import PatientDashboardDTO from "../model/PatientDashboardDTO";
import { PatientDataParams } from "../model/PatientDataParams";
import PatientFamilyDetailsDTO from "../model/PatientFamilyDetailsDTO";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";
import CookieUtils from "../utils/CookieUtils";
import DayWisePrescriptionListDTO from "../model/DayWisePrescriptionListDTO";

const getPatientDataForDashboard = (
  params: PatientDataParams
): Promise<PatientDashboardDTO> => {
  const doctorId = CookieUtils.getUserDetails()?.doctorId!;
  return new Promise((resolve, reject) => {
    getAPIClient()
      .get<PatientDashboardDTO>(`${API_ENDPOINT.patientData}`, {
        params: { ...params, doctorId: doctorId },
      })
      .then((res) => {
        console.log("API Call getPatientDataForDashboard -- ");
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getFamilyTreeDetails = (
  patientId: string,
  startDate: string | null,
  endDate: string | null
): Promise<PatientFamilyDetailsDTO> => {
  const doctorId = CookieUtils.getUserDetails()?.doctorId!;
  const params = {
    doctorId,
    patientId,
    startDate,
    endDate,
  };
  return new Promise<PatientFamilyDetailsDTO>((resolve, reject) => {
    getAPIClient()
      .get<PatientFamilyDetailsDTO>(`${API_ENDPOINT.familyTreeDetails}`, {
        params: params,
      })
      .then((res) => {
        if (res.data) {
          resolve(res.data);
        }
      })
      .catch((e) => {
        const err = e as AxiosError;
        reject(err);
      });
  });
};

const getRxSubmittedDetails = (
  startDate: string | null,
  endDate: string | null
): Promise<DayWisePrescriptionListDTO[]> => {
  const doctorId = CookieUtils.getUserDetails()?.doctorId;
  return new Promise<DayWisePrescriptionListDTO[]>((resolve, reject) => {
    getAPIClient()
      .get<DayWisePrescriptionListDTO[]>(
        `${API_ENDPOINT.dayWisePrescription}`,
        {
          params: {
            doctorId,
            startDate,
            endDate,
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export {
  getPatientDataForDashboard,
  getFamilyTreeDetails,
  getRxSubmittedDetails,
};
