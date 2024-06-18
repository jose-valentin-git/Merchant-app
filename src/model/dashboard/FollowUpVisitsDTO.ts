import DashboardBaseDTO from "./DashboardBaseDTO";

export default interface FollowUpVisitsDTO extends DashboardBaseDTO {
  patientName: string;
  mobileNumber: string;
  visitDate: string;
  ptpMediaId: number;
  lastPatientPrescriptionId: string;
  lastRxDate: string;
}
