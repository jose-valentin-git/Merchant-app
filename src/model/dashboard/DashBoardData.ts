import AgeDTO from "./AgeDTO";
import FollowUpConversionDTO from "./FollowUpConversionDTO";
import FollowUpVisitsDTO from "./FollowUpVisitsDTO";
import GenderPercentageCountDTO from "./GenderPercentageCountDTO";
import LeadCategoryDetailsDTO from "./LeadCategoryDetailsDTO";
import PatientVisitIndexDTO from "./PatientVisitIndexDTO";
import TotalDigitizedRxDTO from "./TotalDigitizedRxDTO";

export default interface DashBoardData {
  genderPercentageCountDTOList: GenderPercentageCountDTO[];
  ageDTOList: AgeDTO[];
  leadCategoryDetailsDTOList: LeadCategoryDetailsDTO[];
  patientVisitIndexDTOList: PatientVisitIndexDTO[];
  followUpVisitsDTOList: FollowUpVisitsDTO[];
  followUpConversionDTOList: FollowUpConversionDTO[];
  totalDigitizedRxDTOList: TotalDigitizedRxDTO[];
}
