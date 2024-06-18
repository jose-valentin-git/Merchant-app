import { useQuery } from "@tanstack/react-query";
import {
  addNewClinic,
  deleteClinic,
  getClinicList,
  markClinisAsCurrent,
  updateClinic,
} from "../services/ClinicService";
import ms from "ms";
import CookieUtils from "../utils/CookieUtils";
import { ClinicDTO } from "../model/ClinicDTO";

// This method is a helper method which will be used in UI to get the clinics list
const useClinicDetails = () => {
  const doctorId = CookieUtils.getUserDetails()?.doctorId!;
  return useQuery({
    queryKey: ["clinicDetails", doctorId],
    queryFn: () => {
      return getClinicList(doctorId);
    },
    staleTime: ms("15m"),
  });
};

// This method is a helper method which will be used in UI to delete the clinic details
const useClinicDelete = (clinicServerId?: string) => {
  if (!clinicServerId) return;
  return deleteClinic(clinicServerId);
};

// This method is a helper method which will be used in UI to Edit the clinic details
const useEditClinicDetails = (clinicDTO?: ClinicDTO) => {
  if (!clinicDTO) return;
  const doctorId = CookieUtils.getUserDetails();

  const updatedClinicDTO = {
    ...clinicDTO,
    doctor: {
      serverId: doctorId?.doctorId ?? "",
    },
    type: {
      serverId: "6",
      active: true,
      key: "clinic",
      value: "CLINIC",
      type: "clinicType",
      orderBy: 1,
    },
  };
  return updateClinic(updatedClinicDTO);
};

// This method is a helper method which will be used in UI to Add a new Clinic
const useAddNewClinic = (clinicDTO?: ClinicDTO) => {
  if (!clinicDTO) return;
  const doctorId = CookieUtils.getUserDetails();
  const addNewClinicData = {
    ...clinicDTO,
    doctor: {
      serverId: doctorId?.doctorId ?? "",
    },
    type: {
      serverId: "6",
      active: true,
      key: "clinic",
      value: "CLINIC",
      type: "clinicType",
      orderBy: 1,
    },
  };
  return addNewClinic(addNewClinicData);
};

//This method will mark clinic as default
const useMarkClinicAsDefault = (clinicServerId?: string) => {
  if (!clinicServerId) return;
  CookieUtils.setMarkedClinic(clinicServerId);
  return markClinisAsCurrent(clinicServerId);
};
export {
  useClinicDetails,
  useClinicDelete,
  useEditClinicDetails,
  useAddNewClinic,
  useMarkClinicAsDefault,
};
