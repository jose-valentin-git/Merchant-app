import { InviteFormData } from "../abstraction/UI/interface";
import { DashboardPartnersDTO } from "../model/DashboardPartnersDTO";
import { PartnersPublicDetailsDTO } from "../model/PartnersPublicDetailsDTO";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";

export const getPartnersDashboard = (
  userId?: number,
  applicationId?: number
): Promise<DashboardPartnersDTO> => {
  return new Promise<DashboardPartnersDTO>((resolve, reject) => {
    if (!userId || !applicationId) return;
    console.log(`Hiting API ${API_ENDPOINT.partnerDetails}`);
    getAPIClient()
      .get<DashboardPartnersDTO>(`${API_ENDPOINT.partnerDetails}`, {
        params: {
          userId: userId,
          applicationId: applicationId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

// This method will get the PublicPartnersData in partners invite screen
export const getPartnersPublicDetails =
  (): Promise<PartnersPublicDetailsDTO> => {
    return new Promise<PartnersPublicDetailsDTO>((resolve, reject) => {
      console.log(`Hiting API ${API_ENDPOINT.partnerDetails}`);
      getAPIClient()
        .get<PartnersPublicDetailsDTO>(`${API_ENDPOINT.partnersType}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => reject(err));
    });
  };

// this method will post the invited partner data
export const postInvitePartner = (data: InviteFormData): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    console.log(`Hiting API ${API_ENDPOINT.inviteAPartner}`);
    getAPIClient()
      .post<string>(`${API_ENDPOINT.inviteAPartner}`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// this method will remove the invited partner from the invited list when x button is clicked
export const postRemovePartner = (inviteId: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    console.log(`Hiting API ${API_ENDPOINT.removeInvitedPartner}`);
    getAPIClient()
      .post<string>(`${API_ENDPOINT.removeInvitedPartner}`, null, {
        params: {
          inviteId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// this method will deactive the partners from active partners active list
export const postDeactivatePartner = (
  userId: number,
  partnerId: string
): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    getAPIClient()
      .post<string>(`${API_ENDPOINT.deactivateActivePartners}`, null, {
        params: {
          userId: userId,
          partnerId: partnerId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// this method will reactivate the partners from inactive partners list
export const postReactivatePartner = (
  userId: number,
  partnerId: string
): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    getAPIClient()
      .post<string>(`${API_ENDPOINT.reactivateInactivePartner}`, null, {
        params: {
          userId: userId,
          partnerId: partnerId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
