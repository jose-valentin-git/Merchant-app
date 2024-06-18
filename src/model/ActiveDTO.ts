import { PartnerTypeDTO } from "./PartnerTypeDTO";

export interface ActiveDTO {
  startDate: string;
  endDate: string;
  dashboardTime: string;
  inviteStatus: string;
  partnerId: string;
  partnerName: string;
  partnerType: string;
  partnerEmail: string;
  partnerMobileNumber: string;
  leadShareType: string;
  partnerOnBoardingDate: string;
  activeInActiveDate: string;
  lastRxAcceptedDate: string;
  rxReferredCount: number;
  rxAcceptedCount: number;
  rxDeliveredCount: number;
  rxSharedCount: number;
  rxExpiredCount: number;
  rxRejectedCount: number;
  rxValueEntered: number | null;
  sharePercentageDefined: number | null;
  companyName: string;
  address: string;
  partnerTypeId: number;
  partnerTypeDto?: PartnerTypeDTO | null;
}
