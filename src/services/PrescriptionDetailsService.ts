import PrescriptionDetailsDTO from "../model/PrescriptionDetialsDTO";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";

const getPrescriptionDetails = (
  ptpId: string
): Promise<PrescriptionDetailsDTO> => {
  return new Promise((resolve, reject) => {
    if (!!!ptpId) return;
    getAPIClient()
      .get<PrescriptionDetailsDTO>(`${API_ENDPOINT.prescriptionMedia}`, {
        params: {
          ptpId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const reSharePrescription = (ptpId: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    getAPIClient()
      .post<string>(`${API_ENDPOINT.reSharePrescription}`, null, {
        params: {
          ptpId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getPrescriptionDetails, reSharePrescription };
