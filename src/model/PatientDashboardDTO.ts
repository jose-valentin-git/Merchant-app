import PatientDetailsDTO from "./PatientDetailsDTO";

export default interface PatientDashboardDTO {
  patientCount: number;
  patientDetailsDTOList: PatientDetailsDTO[];
  limit: number;
  offset: number;
}
