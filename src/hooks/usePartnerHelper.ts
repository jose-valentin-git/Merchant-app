import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../services/PartnerService";
import { PartnerDTO } from "../model/PartnerDTO";
import {
  getPartnersDashboard,
  getPartnersPublicDetails,
  postDeactivatePartner,
  postInvitePartner,
  postReactivatePartner,
  postRemovePartner,
} from "../services/partnersDashboardService";
import ms from "ms";
import { InviteFormData } from "../abstraction/UI/interface";
import CookieUtils from "../utils/CookieUtils";

const useGetPartnerList = (partnerTypeId: number) => {
  return useQuery<PartnerDTO[]>({
    queryKey: ["partnerType", partnerTypeId],
    queryFn: () => {
      const doctorId = CookieUtils.getUserDetails();
      return getPartners(doctorId?.doctorId, partnerTypeId);
    },
  });
};
const usePartnersDashboardData = () => {
  return useQuery({
    queryKey: ["partnersDashboardData"],
    queryFn: () => {
      const userId = CookieUtils.getUserDetails()?.userId;
      const applicationId = 3;
      return getPartnersDashboard(userId, applicationId);
    },
    staleTime: ms("15m"),
  });
};
const usePartnersPublicData = () => {
  return useQuery({
    queryKey: ["partnersType"],
    queryFn: () => {
      return getPartnersPublicDetails();
    },
    staleTime: ms("3h"),
    refetchInterval: ms("3h"),
  });
};

const invitePartner = (data: InviteFormData) => {
  const user = CookieUtils.getUserDetails();
  data = { ...data, userId: user?.userId };

  return postInvitePartner(data);
};

const useRemoveInvitedPartener = (partnerId?: number) => {
  if (!partnerId) return;
  return postRemovePartner(partnerId);
};

const useDeactivateActivePartner = (partnerId: string) => {
  if (!partnerId) return;
  const user = CookieUtils.getUserDetails();
  return postDeactivatePartner(user?.userId!, partnerId);
};

const useReactivateInactivePatner = (partnerId?: string) => {
  if (!partnerId) return;
  const user = CookieUtils.getUserDetails();
  return postReactivatePartner(user?.userId!, partnerId);
};
export {
  useGetPartnerList,
  usePartnersDashboardData,
  usePartnersPublicData,
  invitePartner,
  useRemoveInvitedPartener,
  useDeactivateActivePartner,
  useReactivateInactivePatner,
};
