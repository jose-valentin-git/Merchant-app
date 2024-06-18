import { PartnerDTO } from "../model/PartnerDTO";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";

export const getPartners = (
  doctorId?: string,
  partnerTypeId?: number
): Promise<PartnerDTO[]> => {
  return new Promise<PartnerDTO[]>((resolve, reject) => {
    if (!partnerTypeId) return;

    console.log(`Hiting API ${API_ENDPOINT.partnersByPartnerTypeId}`);

    getAPIClient()
      .get<PartnerDTO[]>(`${API_ENDPOINT.partnersByPartnerTypeId}`, {
        params: {
          doctorId: doctorId,
          partnerTypeId: partnerTypeId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};
