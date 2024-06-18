import DayWisePrescriptionListDTO from "./DayWisePrescriptionListDTO";
import PatientDetailsDTO from "./PatientDetailsDTO";

export default interface PatientFamilyDetailsDTO {
  patientDetailsDTO: PatientDetailsDTO;
  dayWisePrescriptionList: DayWisePrescriptionListDTO[];
}
