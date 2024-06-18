import { useQuery } from "@tanstack/react-query";
import {
  deactivateAssociate,
  getAssociateDetails,
  postAssociateDetails,
} from "../services/AssociateSevice";
import ms from "ms";
import CookieUtils from "../utils/CookieUtils";
import { AddAssociateDTO } from "../model/AddAssociateDTO";

const useAssociateDetails = () => {
  const doctorId = CookieUtils.getUserDetails()?.doctorId!;

  return useQuery({
    queryKey: ["associateDetails", doctorId],
    queryFn: () => {
      return getAssociateDetails(doctorId);
    },
    staleTime: ms("15m"),
    enabled: Boolean(doctorId),
  });
};

const useAddNewAssociate = (associateDTO: AddAssociateDTO | null) => {
  return postAssociateDetails(associateDTO!);
};
const useDeLikAssociate = (associateServerId: string) => {
  return deactivateAssociate(associateServerId);
};

export { useAssociateDetails, useAddNewAssociate, useDeLikAssociate };
