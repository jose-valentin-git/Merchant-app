import AgeDTO from "./AgeDTO";
import FollowUpConversionDTO from "./FollowUpConversionDTO";
import FollowUpVisitsDTO from "./FollowUpVisitsDTO";
import GenderPercentageCountDTO from "./GenderPercentageCountDTO";
import LeadCategoryDetailsDTO from "./LeadCategoryDetailsDTO";
import PatientVisitIndexDTO from "./PatientVisitIndexDTO";
import TotalDigitizedRxDTO from "./TotalDigitizedRxDTO";

export type CategeoryRespectiveDashboardData =
  | GenderPercentageCountDTO
  | AgeDTO
  | LeadCategoryDetailsDTO
  | TotalDigitizedRxDTO
  | FollowUpConversionDTO
  | PatientVisitIndexDTO
  | FollowUpVisitsDTO;
