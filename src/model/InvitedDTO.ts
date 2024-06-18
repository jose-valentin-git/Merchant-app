import { PartnerTypeDTO } from "./PartnerTypeDTO";

export interface InvitedDTO {
  id: number;
  active: boolean | null;
  name: string;
  mobileNumber: string;
  email: string | null;
  inviteType: string | null;
  partnerTypeId: number;
  userId: number;
  inviteStatus: string;
  invitedDate: string;
  invitePendingSince: number;
  partnerType: string;
  doctorPartnerLinkId: number | null;
  partnerTypeDto?: PartnerTypeDTO | null;
}
