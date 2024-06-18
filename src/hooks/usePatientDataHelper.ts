import { useQuery } from "@tanstack/react-query";
import {
  getFamilyTreeDetails,
  getPatientDataForDashboard,
  getRxSubmittedDetails,
} from "../services/PatientDataService";
import ms from "ms";
import { PatientDataParams } from "../model/PatientDataParams";

const usePatientDashboardList = (params: PatientDataParams) => {
  return useQuery({
    queryKey: ["patientDashboardList", params],
    queryFn: () => {
      return getPatientDataForDashboard(params);
    },
    // staleTime: ms("5m"),
    refetchInterval: false,
    refetchOnMount: false,
  });
};

const useFamilyTree = (
  patientId: string,
  startDate: string | null,
  endDate: string | null
) => {
  return useQuery({
    queryKey: ["patientData", patientId, startDate, endDate],
    queryFn: () => {
      return getFamilyTreeDetails(patientId, startDate, endDate);
    },
    staleTime: ms("3m"),
    refetchInterval: false,
    refetchOnMount: false,
  });
};
const useRxSubmittedList = (
  startDate: string | null,
  endDate: string | null
) => {
  return useQuery({
    queryKey: ["rxsubmitteddata", startDate, endDate],
    queryFn: () => {
      return getRxSubmittedDetails(startDate, endDate);
    },
    staleTime: ms("5m"),
  });
};

export { usePatientDashboardList, useFamilyTree, useRxSubmittedList };
