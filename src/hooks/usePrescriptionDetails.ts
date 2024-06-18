import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { getPrescriptionDetails } from "../services/PrescriptionDetailsService";

const usePrescriptionDetails = (ptpId: string) => {
  return useQuery({
    queryKey: ["ptpID", ptpId],
    queryFn: () => {
      return getPrescriptionDetails(ptpId);
    },
    staleTime: ms("5m"),
  });
};
export { usePrescriptionDetails };
